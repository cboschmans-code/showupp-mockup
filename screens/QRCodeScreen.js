import React from "react";
import {View, Text, StyleSheet} from "react-native";



const QRCodeScreen = () => {
  return  <View style={styles.screen}><Text>QR !</Text></View>
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default QRCodeScreen;