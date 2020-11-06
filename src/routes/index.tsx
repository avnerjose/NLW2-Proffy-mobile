import React, { useContext } from 'react';
import AppStack from './AppStack';
import { AuthContext } from '../contexts/Authprovider';
import Onboarding from './Onboarding';

function Routes() {

    const { hasOnboarded } = useContext(AuthContext);

    return (
        hasOnboarded ? <AppStack /> : <Onboarding />
    )
}

export default Routes;