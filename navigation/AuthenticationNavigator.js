import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {QRCodeNavigator, TouristBottomNavigator} from "./ShowUppNavigator";

const AuthenticationNavigator = (props) => {
    return <NavigationContainer>
        <TouristBottomNavigator/>
    </NavigationContainer>

}

export default AuthenticationNavigator;