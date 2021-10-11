import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ranking } from './Ranking';
import { Games } from './Games';
import { Players } from './Players';

const { Navigator, Screen } = createBottomTabNavigator();

export function PlayersRoutes () {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions= {{
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 50,
                },
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: theme.colors.shape,
                tabBarInactiveTintColor: theme.colors.title,
                tabBarActiveBackgroundColor: theme.colors.primary,
                tabBarInactiveBackgroundColor: theme.colors.primary
            }}
        >
            <Screen 
                name='Ranking' 
                component={Ranking} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='cards-club'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Games' 
                component={Games} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='cards'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Players' 
                component={Players} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons 
                            name='account-multiple'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}