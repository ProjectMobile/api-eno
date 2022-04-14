import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation, { MapsNavigation } from "./StackNavigation";

export default props => {
    return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
    )
}