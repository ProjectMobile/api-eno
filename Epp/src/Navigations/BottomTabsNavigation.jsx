import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation, PartnersNavigation } from "./StackNavigation";
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native'
import { colors } from '../Components/colors/'
const Tab = createBottomTabNavigator()
console.log(colors)
export function ShowBottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="Inicio" component={HomeNavigation} options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <>
                            <Ionicons 
                            name="earth"
                            size={24}
                            color={focused ? `${colors.red}` : `${colors.black}`} 
                            />
                            <Text 
                            style={{ 
                                color: focused ? `${colors.red}` : `${colors.black}` 
                            }}
                            >
                                Parceiros
                                </Text>
                        </>
                    </>
                )
            }} />
            <Tab.Screen name="Parceiros" component={PartnersNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons 
                            name="albums"
                            size={24}
                            color={focused ? `${colors.red}` : `${colors.black}`} 
                            />
                            <Text 
                            style={{ 
                                color: focused ? `${colors.red}` : `${colors.black}` 
                            }}
                            >
                                Parceiros
                                </Text>
                        </>
                    )
                }} />

        </Tab.Navigator>
    )
}