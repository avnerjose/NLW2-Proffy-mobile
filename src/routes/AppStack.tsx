import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Login from '../pages/Login';
import ForgotPasword from '../pages/ForgotPassword';
import ConclusionScreen from '../pages/ConclusionScreen';
import RegisterScreen1 from '../pages/Register/Screen1';
import RegisterScreen2 from '../pages/Register/Screen2';

export type RootStackParamList = {
    Login: undefined,
    ForgotPassword: undefined,
    Register1: undefined,
    Register2: undefined,
    Conclusion: {
        title: string,
        subtitle: string,
        label: string,
    },
    Landing: undefined,
    GiveClasses: undefined,
    StudyTabs: undefined,
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
            <Screen name="ForgotPassword" component={ForgotPasword} />
            <Screen name="Register1" component={RegisterScreen1} />
            <Screen name="Register2" component={RegisterScreen2} />
            <Screen name="Conclusion" component={ConclusionScreen} />
            <Screen name="Landing" component={Landing} />
            <Screen name="GiveClasses" component={GiveClasses} />
            <Screen name="StudyTabs" component={StudyTabs} />
        </Navigator>
    );
}

export default AppStack;
