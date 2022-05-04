import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

export default props => {
    return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
    )
}