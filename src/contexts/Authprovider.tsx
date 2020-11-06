import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
    hasOnboarded: boolean | null,
    setOnboarding: (Value: boolean) => void,
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
            } else {
                setOnboard(false);
            }
        });
    }

    async function setOnboarding(Value: boolean) {
        await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
            hasOnboarded: Value,
        }));
        loadOnboard();
    }

    return (
        <AuthContext.Provider value={{ hasOnboarded: onboard, setOnboarding: setOnboarding }}>
            { children}
        </AuthContext.Provider >
    );
}

export default AuthProvider;
