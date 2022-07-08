import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation, PartnersNavigation, EventsNavigation, ConfigurationNavigation } from "./StackNavigation";
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native'
import { colors } from '../Components/colors/'
import { useTranslation } from 'react-i18next'
import { loader } from "../data/events";
const Tab = createBottomTabNavigator()
export function ShowBottomTabs() {
    const { t, i18n } = useTranslation();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="Inicio" component={HomeNavigation} options={{
                unmountOnBlur: true,

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
                                    color: focused ? `${colors.red}` : `${colors.black}`, fontSize: 10
                                }}
                            >
                                {t("map")}
                            </Text>
                        </>
                    </>
                )
            }} />

            <Tab.Screen name="Eventos" component={EventsNavigation}
                options={{
                    unmountOnBlur: loader(),
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons
                                name="wine-outline"
                                size={24}
                                color={focused ? `${colors.red}` : `${colors.black}`}
                            />
                            <Text
                                style={{
                                    color: focused ? `${colors.red}` : `${colors.black}`, fontSize: 10
                                }}
                            >
                                {t("event")}
                            </Text>
                        </>
                    )
                }} />

            <Tab.Screen name="Parceiros" component={PartnersNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons
                                name="ribbon-outline"
                                size={24}
                                color={focused ? `${colors.red}` : `${colors.black}`}
                            />
                            <Text
                                style={{
                                    color: focused ? `${colors.red}` : `${colors.black}`, fontSize: 10
                                }}
                            >
                                {t("partners")}
                            </Text>
                        </>
                    )
                }} />

            <Tab.Screen name="Configuracao" component={ConfigurationNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons
                                name="settings-outline"
                                size={24}
                                color={focused ? `${colors.red}` : `${colors.black}`}
                            />
                            <Text
                                style={{
                                    color: focused ? `${colors.red}` : `${colors.black}`, fontSize: 10
                                }}
                            >
                                {t("settings")}
                            </Text>
                        </>
                    )
                }} />



        </Tab.Navigator>
    )
}