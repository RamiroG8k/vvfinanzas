'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Diagnosis } from '@/entities';

type ProfileContextProps = {
    profile?: Diagnosis;
    update: (data: Diagnosis) => void;
    clear: () => void;
};

const ProfileContext = createContext<ProfileContextProps>({} as ProfileContextProps);

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [profile, setProfile] = useState<Diagnosis>();

    const update = (data: any) => {
        setProfile(data);
        localStorage.setItem('profile', JSON.stringify(data));
    };

    const clear = () => {
        localStorage.removeItem('profile');
    };

    useEffect(() => {
        const profile = localStorage.getItem('profile');

        if (profile) {
            setProfile(JSON.parse(profile));
        }
    }, []);

    const context = { profile, update, clear };

    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
