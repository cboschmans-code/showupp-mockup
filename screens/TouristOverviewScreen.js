import React from "react";
import MapView, {Marker,PROVIDER_GOOGLE} from "react-native-maps";
import {Dimensions, View, StyleSheet} from "react-native";
import {Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
const mapStyle=[
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];

const TouristOverviewScreen = (props) => {



    const mapRegion = {
        latitude: 38.736946,
        longitude: -9.142685,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    return (<View style={styles.container}><MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={mapRegion}><Marker
        coordinate={{latitude: 38.712726, longitude: -9.152799}}
        tracksViewChanges={false}
        icon={require('../assets/images/markers/category_music-04.png')}/>
        <Marker
            coordinate={{latitude: 38.717237, longitude: -9.132114}}
            tracksViewChanges={false}
            icon={require('../assets/images/markers/category_dance-04.png')}/>
        <Marker
            coordinate={{latitude: 38.738640, longitude: -9.149511}}
            tracksViewChanges={false}
            icon={require('../assets/images/markers/category_streetart-04.png')}/>
        <Marker
            coordinate={{latitude: 38.731362, longitude: -9.129586}}
            tracksViewChanges={false}
            icon={require('../assets/images/markers/category_handicrafts-04.png')}/>
        <Marker
            coordinate={{latitude: 38.748727, longitude: -9.127204}}
            tracksViewChanges={false}
            icon={require('../assets/images/markers/category_available_canvas.png')}/>
    </MapView>
        <View
            style={{
                position: 'absolute',//use absolute position to show button on top of the map
                top: '85%', //for center align
                alignSelf: 'center', //for align to right
                flexDirection: 'row'
            }}
        >
            <View style={{
                    backgroundColor: 'white', borderRadius: 40,margin:10,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',elevation:5
                }}><TouchableOpacity><Image
                source={require('../assets/images/filtericons/filter_options-04.png')}
                style={{height: 64, width: 46, margin: 10}}/></TouchableOpacity></View>

            <View
                style={{
                    backgroundColor: 'white', borderRadius: 40,margin:10,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',elevation:5
                }}><TouchableOpacity><Image
                source={require('../assets/images/filtericons/filter_favorites-04.png')}
                style={{height: 64, width: 46, margin: 10}}/></TouchableOpacity></View>
        </View>
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
export default TouristOverviewScreen;