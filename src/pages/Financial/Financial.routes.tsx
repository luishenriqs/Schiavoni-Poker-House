import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List } from './List';
import { Register } from './Register';
import { Resume } from './Resume';

const { Navigator, Screen } = createBottomTabNavigator();

export function FinancialRoutes () {
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
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.title,
            }}
        >
            <Screen
                name='Lista' 
                component={List} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Cadastro' 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='attach-money'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='Resumo' 
                component={Resume} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name='pie-chart'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}