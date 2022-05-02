import { useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../colors/'
import axios from 'axios'
import { events } from '../../data/events';
import * as Location from "expo-location";

var mapStyle =
  [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]



function Maps() {

  useEffect(() => {
    //pede a localização do usuário.
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

    })();
  }, []);


  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -30.8962053,
          longitude: -55.5352968,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        showsUserLocation={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        maxZoomLevel={20}
        minZoomLevel={15}
        userInterfaceStyle={"dark"}
        customMapStyle={mapStyle}
        style={[styles.maps]}
      >


        {/* {events.map((endereco) => (

          <Marker
            key={endereco.id}

            coordinate={{
              latitude: endereco.lat,
              longitude: endereco.long,
            }}

            pinColor={'red'}
            title={endereco.name}
            description={`${endereco.description} - $}`}
          // pinColor={endereco.color}

          >
            {(endereco.img) && <Image
              source={{ uri: endereco.img }}
              style={{ width: 40, height: 40 }}
            >
            </Image>}

          </Marker>
        ))} */}



      </MapView>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }, maps: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    top: 15
  }
});

export { Maps }