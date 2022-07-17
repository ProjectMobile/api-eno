import React from "react";
import Navigations from "./src/Navigations";
import i18next from "./src/lang/i18n/";
import { I18nextProvider } from 'react-i18next';
import { StatusBar } from "expo-status-bar";
export default function App() {
    return (
        <I18nextProvider i18n={i18next}>
            <StatusBar />
            <Navigations />
        </I18nextProvider>
    )
}