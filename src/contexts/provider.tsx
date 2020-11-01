import React from 'react';
import AuthProvider from './Authprovider';
const ContextProvider: React.FC = ({ children }) => {

    return (
        <AuthProvider>
            { children}
        </AuthProvider>
    )
}

export default ContextProvider;