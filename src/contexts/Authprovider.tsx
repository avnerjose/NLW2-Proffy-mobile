import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
    hasOnboarded: boolean | null,
    setOnboardingTrue(): void,
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [onboard, setOnboard] = useState<boolean | null>(null);

    useEffect(() => {
        loadOnboard();
    }, []);

    async function loadOnboard() {
        await AsyncStorage.getItem('hasOnboarded').then(response => {
            if (!!response) {
                const onBoard = JSON.parse(response);
                setOnboard(onBoard.hasOnboarded);
            }else{
                setOnboard(false);
            }
        });
    }

    async function setOnboardingFalse() {
        await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
            hasOnboarded: false,
        }));
        loadOnboard();
    }

    return (
        <AuthContext.Provider value={{ hasOnboarded: onboard, setOnboardingTrue: setOnboardingFalse }}>
            { children}
        </AuthContext.Provider >
    );
}

export default AuthProvider;
