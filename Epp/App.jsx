import React from "react";
import Navigations from "./src/Navigations";
import i18next from "./src/lang/i18n/";
import { I18nextProvider } from 'react-i18next';
export default function App() {
    return (
        <I18nextProvider i18n={i18next}>
        <Navigations/>
        </I18nextProvider>
    )
}