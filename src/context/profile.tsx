'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Diagnosis } from '@/entities';
import { AvailableSteps } from '@/entities/diagnosis';

type ProfileContextProps = {
    profile?: Diagnosis;
    step?: AvailableSteps;
    update: (data: Diagnosis, step?: AvailableSteps) => void;
    clear: () => void;
};

const ProfileContext = createContext<ProfileContextProps>({} as ProfileContextProps);

const ORDERED_STEPS: Record<AvailableSteps, Record<'previous' | 'next', AvailableSteps | undefined>> = {
    INCOMES: {
        previous: undefined,
        next: 'EXPENSES'
    },
    EXPENSES: {
        previous: 'INCOMES',
        next: 'DEBTS'
    },
    DEBTS: {
        previous: 'EXPENSES',
        next: 'CREDIT_CARDS'
    },
    CREDIT_CARDS: {
        previous: 'EXPENSES',
        next: 'BALANCE'
    },
    BALANCE: {
        previous: 'EXPENSES',
        next: undefined
    }
};

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentStep, setCurrentStep] = useState<AvailableSteps>();
    const [profile, setProfile] = useState<Diagnosis>();

    const clear = () => {
        localStorage.removeItem('diagnosis-step');
        localStorage.removeItem('profile');
    };

    const update = (data: Diagnosis, step?: AvailableSteps) => {
        if (step) {
            const nextStep = ORDERED_STEPS[step].next;

            nextStep ?
                localStorage.setItem('diagnosis-step', nextStep) :
                localStorage.removeItem('diagnosis-step');

            setCurrentStep(step);
        }

        localStorage.setItem('profile', JSON.stringify(data));
        setProfile(data);
    };

    const initializeProfile = () => {
        const profile = localStorage.getItem('profile');

        if (profile) {
            setProfile(JSON.parse(profile));
        } else {
            const initialDiagnosis = new Diagnosis({});

            localStorage.setItem('profile', JSON.stringify(initialDiagnosis));
            setProfile(initialDiagnosis);
        }
    };

    const initializeDiagnosisStep = () => {
        const step = localStorage.getItem('diagnosis-step');

        if (step) {
            setCurrentStep(step as AvailableSteps);
        } else {
            const initialStep = 'INCOMES';

            localStorage.setItem('diagnosis-step', initialStep);
            setCurrentStep(initialStep);
        }
    };

    useEffect(() => {
        initializeDiagnosisStep();
        initializeProfile();
    }, []);

    const context = { profile, step: currentStep, update, clear };

    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
