import React from "react";
import {View, Text, StyleSheet} from "react-native";



const ARScreen = () => {
    return  <View style={styles.screen}><Text>Search !</Text></View>
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default ARScreen;