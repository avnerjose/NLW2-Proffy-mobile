import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import Icon from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {

    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo-Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#FAFAFC',
                activeBackgroundColor: '#EBEBF5',
                inactiveTintColor: '#C1C1CC',
                activeTintColor: '#32264D'
            }}
        >
            <Screen name="TeacherList" component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Icon name="easel" color={focused ? "#8257E5" : color} size={size} />
                        );
                    }
                }} />
            <Screen name="Favorites" component={Favorites}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Icon name="heart" color={focused ? "#8257E5" : color} size={size} />
                        );
                    }
                }} />
        </Navigator>
    );

};

export default StudyTabs;