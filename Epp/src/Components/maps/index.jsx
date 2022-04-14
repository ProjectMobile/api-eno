import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import  MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../colors/'
const enderecos = [
  { ID: 1, rua: 'UNIPAMPA', cidade: 'Santa do Livramento', lat: -30.8890203, long: -55.5292072, situacao: 'DISPONÍVEL - ORGANIZADO PELA UNI', img: 'https://sites.unipampa.edu.br/informativo/files/2015/04/Fachada-Campus-Santana-do-Livramento_ACS_S%C3%A1ryonAzevedo-1.jpg' },
  ,
  { ID: 2, rua: 'Cruzeiro do Sul', cidade: 'Santa do Livramento', lat: -30.8908792, long: -55.5292731,situacao: 'Evento Organizado pela Agência tal'} ]


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
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -30.8888044,
          longitude: -55.5306411,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        provider = {PROVIDER_GOOGLE}
        maxZoomLevel={20}
        minZoomLevel={15}
        userInterfaceStyle={"dark"}
        customMapStyle = {mapStyle}
        style={[styles.maps]}
>
        {enderecos.map((endereco) => (
          <Marker
            coordinate={{
              latitude: endereco.lat,
              longitude: endereco.long,
            }}
            pinColor={`${colors.white}`}
            key={endereco.ID}
            onPress={() => console.log(endereco.ID)}
            title={endereco.rua}
            description={`${endereco.situacao} - ${endereco.cidade}`}
            // pinColor={endereco.color}
            
          >
            {(endereco.img)&&<Image
              source={{ uri: endereco.img }}
              style={{ width: 40, height: 40 }}
            >
            </Image>}
          </Marker>
        ))}

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
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width
  }
});

export {Maps}