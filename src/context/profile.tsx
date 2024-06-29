'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { AvailableSteps } from '@/entities/diagnosis';
import Diagnosis, { type DiagnosisData } from '@/entities/diagnosis/Diagnosis';

type ProfileContextProps = {
    clear: () => void;
    goToPreviousStep: () => void;
    profile?: Diagnosis;
    step?: AvailableSteps;
    update: (data: Partial<DiagnosisData>, step?: AvailableSteps) => void;
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
        previous: 'DEBTS',
        next: 'BALANCE'
    },
    BALANCE: {
        previous: 'CREDIT_CARDS',
        next: 'COMPLETED'
    },
    COMPLETED: {
        previous: 'BALANCE',
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

    const update = (data: Partial<DiagnosisData>, step?: AvailableSteps) => {
        if (step) {
            const nextStep = ORDERED_STEPS[step].next;

            nextStep ?
                localStorage.setItem('diagnosis-step', nextStep) :
                localStorage.removeItem('diagnosis-step');

            setCurrentStep(nextStep);
        }

        let currentProfile = new Diagnosis({
            ...profile,
            ...data
        });

        localStorage.setItem('profile', JSON.stringify(currentProfile));
        setProfile(currentProfile);
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

    const goToPreviousStep = () => {
        if (!currentStep) {
            return;
        }

        setCurrentStep(ORDERED_STEPS[currentStep].previous);
    };

    useEffect(() => {
        initializeDiagnosisStep();
        initializeProfile();
    }, []);

    const context = {
        clear,
        goToPreviousStep,
        profile,
        step: currentStep,
        update
    };

    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
