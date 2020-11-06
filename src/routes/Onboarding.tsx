import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../pages/OnboardingScreens/Screen1';
import Screen2 from '../pages/OnboardingScreens/Screen2';

const { Navigator, Screen } = createStackNavigator();


export default function Onboarding() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen component={Screen1} name="Screen1" />
            <Screen component={Screen2} name="Screen2" />
        </Navigator>
    )
}