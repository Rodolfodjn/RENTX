import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { StarkRoutes } from "./stack.routes";

export function Routes() {
    return(
        <NavigationContainer>
            <StarkRoutes />
        </NavigationContainer>


    );
}