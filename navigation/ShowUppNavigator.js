import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import TouristOverviewScreen from "../screens/TouristOverviewScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import QRCodeScreen from "../screens/QRCodeScreen";
import {Button, Image, Platform, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import ARScreen from "../screens/ARScreen";
import Colors from "../constants/Colors";
import {Text} from "react-native";
import SearchScreen from "../screens/SearchScreen";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";


const SearchStackNavigator = createStackNavigator();
const SearchNavigator = () => {
    return <SearchStackNavigator.Navigator screenOptions={{tabBarVisible: false}}>
        <SearchStackNavigator.Screen
            name="Search"
            component={SearchScreen}
            options={({navigation})=>({
                headerTitle: '', headerLeft: (props) => {
                    return (<View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}><TouchableWithoutFeedback {...props} onPress={()=>{navigation.goBack()}}><Image
                        source={require('../assets/images/header/goback_orange-04.png')}
                        style={{
                            width: 72,
                            height: 24,
                            margin: 10
                        }}/></TouchableWithoutFeedback><Text
                        style={{color: Colors.primary}}
                    >Go Back</Text></View>)
                }
            })}/>

    </SearchStackNavigator.Navigator>
}

const ARStackNavigator = createStackNavigator();
const ARNavigator = () => {
    return <ARStackNavigator.Navigator screenOptions={{tabBarVisible: false}}>
        <ARStackNavigator.Screen
            name="AR"
            component={ARScreen}
            options={({navigation})=>({
                headerTitle: '', headerLeft: (props) => {
                    return (<View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}><TouchableWithoutFeedback {...props} onPress={()=>{navigation.goBack()}}><Image
                        source={require('../assets/images/header/goback_orange-04.png')}
                        style={{
                            width: 72,
                            height: 24,
                            margin: 10
                        }}/></TouchableWithoutFeedback><Text
                        style={{color: Colors.primary}}
                    >Go Back</Text></View>)
                }
            })}/>

    </ARStackNavigator.Navigator>
}

const QRCodeStackNavigator = createStackNavigator();
const QRCodeNavigator = () => {
    return <QRCodeStackNavigator.Navigator screenOptions={{tabBarVisible: false}}>
        <QRCodeStackNavigator.Screen
            name="QRCode"
            component={QRCodeScreen}
            options={({navigation})=>({
                headerTitle: '', headerLeft: (props) => {
                    return (<View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}><TouchableWithoutFeedback {...props} onPress={()=>{navigation.goBack()}}><Image
                        source={require('../assets/images/header/goback_orange-04.png')}
                        style={{
                            width: 72,
                            height: 24,
                            margin: 10
                        }}/></TouchableWithoutFeedback><Text
                        style={{color: Colors.primary}}
                    >Go Back</Text></View>)
                }
            })}/>

    </QRCodeStackNavigator.Navigator>
}

const TouristTabNavigator = createBottomTabNavigator();
export const TouristBottomNavigator = () => {
    return (
        <TouristTabNavigator.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {height: 75}
            }}>
            <TouristTabNavigator.Screen
                options={{
                    headerStyle: {height: 125},
                    title: 'HOME',
                    headerTitle: '',
                    headerLeft: () => {
                        return <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}><View style={{padding: 10}}><Image
                            source={require('../assets/images/header/show_upp_icon-13.png')}
                            style={{height: 72, width: 48, margin: 10}}/></View><Image
                            source={require('../assets/images/header/settings.png')}
                            style={{height: 54, width: 32, margin: 10}}/></View>
                    },
                    headerRight: () => {
                        return <View style={{flexDirection: 'row',margin:10,alignItems:'center'}}><Image
                            source={require('../assets/images/header/reminderclock_inactive.png')}
                            style={{height: 54, width: 40, margin: 10}}/><Image
                            source={require('../assets/images/header/mailbox_inactive_empty.png')}
                            style={{height: 54, width: 40, margin: 10}}/><Image
                            source={require('../assets/images/header/bell_inactive_empty.png')}
                            style={{height: 54, width: 40, margin: 10}}/></View>
                    },
                    tabBarVisible: true, tabBarIcon: ({focused}) => {
                        const image = focused
                            ? require('../assets/images/footer/map_active-04.png')
                            : require('../assets/images/footer/map_inactive-04.png')
                        return (
                            <Image
                                source={image}
                                style={{height: 54, width: 54}}
                            />
                        )
                    }
                }}
                name="TouristOverview"
                component={TouristOverviewScreen}/>
            <TouristTabNavigator.Screen
                name="QRCodeStack"
                component={QRCodeNavigator}
                options={{
                    tabBarStyle: {display: 'none'},
                    title: 'QR CODE',
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({focused}) => {
                        const image = focused
                            ? require('../assets/images/footer/qrcodescan_active-04.png')
                            : require('../assets/images/footer/qrcodescan_inactive-04.png')
                        return (
                            <Image
                                source={image}
                                style={{height: 54, width: 54}}
                            />
                        )
                    }
                }}/>
            <TouristTabNavigator.Screen
                name="ARNav"
                component={ARNavigator}
                options={{
                    tabBarStyle: {display: 'none'}, title: 'AR+', headerShown: false, tabBarIcon: ({focused}) => {
                        const image = focused
                            ? require('../assets/images/footer/AR_scan_active-04.png')
                            : require('../assets/images/footer/AR_scan_inactive-04.png')
                        return (
                            <Image
                                source={image}
                                style={{height: 54, width: 54}}
                            />
                        )
                    }
                }}/>
            <TouristTabNavigator.Screen
                name="SearchNav"
                component={SearchNavigator}
                options={{
                    tabBarStyle: {display: 'none'}, title: 'SEARCH', tabBarVisible: false,headerShown: false, tabBarIcon: ({focused}) => {
                        const image = focused
                            ? require('../assets/images/footer/search_active-04.png')
                            : require('../assets/images/footer/search_inactive-04.png')
                        return (
                            <Image
                                source={image}
                                style={{height: 54, width: 54,marginBottom:0}}
                            />
                        )
                    },tabBarLabelStyle:{margin:0,}
                }}/>
        </TouristTabNavigator.Navigator>)
}