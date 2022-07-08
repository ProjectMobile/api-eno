import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { getPartners } from '../../data/'
import { List, Modal } from 'react-native-paper'
import { ModalPopUp } from '../../Components/modal';
import { Maps } from '../../Components/maps';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { colors } from '../../Components/colors';
import { mapStyle } from '../../Components/colors/'
import Icon from 'react-native-vector-icons/FontAwesome';

function PartnerScreen({ navigation }) {


    useEffect(() => {
        async function fetch() {
            const partnersA = await getPartners();
            var hotelParceiros = [JSON.parse(partnersA)]
            var hotel = [];

            hotelParceiros[0].forEach(element => {
                if (element.type == "Hotel") {
                    hotel.push(element)
                }
            })

            setHotelPartners(hotel)

            setTimeout(()=>{console.log('done')},500)
        }

        fetch();

    }, [])


    const [hotelPartners, setHotelPartners] = useState([])
    const [expanded, setExpanded] = useState(false);
    const [partner, setPartner] = useState({})
    const [modal, setModal] = useState(false)
    const [initialRegion, setInitialRegion] = useState({
        latitude: -30.8955704,
        longitude: -55.5370476,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    })
    const handlePress = () => setExpanded(!expanded);



    function ModalMap() {
        return (
            <ModalPopUp visible={modal}>
                <View style={{flexDirection: 'row-reverse' }}>
                        <Icon name='close' size={32} color='black' onPress={() => { setModal(!modal) }} />
                    </View>

                <View style={{}}>
                    <Text>{partner.name}</Text>
                    <Text>{partner.address}</Text>
                    <Text>{partner.email}</Text>
                    <Text>{partner.phoneNumber}</Text>
                </View>

                <View style={{ widht: Dimensions.get('screen').width * 1, height: Dimensions.get('screen').height * 0.46 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', right: 0, left: 0, bottom: 0 }}>
                        <MapView
                            initialRegion={initialRegion}
                            maxZoomLevel={20}
                            provider={PROVIDER_GOOGLE}
                            minZoomLevel={15}
                            customMapStyle={mapStyle}
                            userInterfaceStyle={"dark"}
                            style={{ width: '90%', height: '90%' }}
                        >
                            {
                                partner.lat !== null && partner.lat !== undefined && (<Marker coordinate={{ latitude: partner.lat, longitude: partner.long }} pinColor={colors.blue} title={partner.name}>

                                </Marker>)
                            }

                        </MapView>
                    </View>
                </View>
            </ModalPopUp>
        )
    }


    return (
        <View >

            <ModalMap />


            <List.Section title="Parceiros" titleStyle={{ alignSelf: 'center' }}>
                <List.Accordion
                    title="Hotéis Oficiais"
                    expanded={expanded}
                    onPress={handlePress}
                >

                    <View style={{
                        width: Dimensions.get('screen').width,
                        height: Dimensions.get('screen').height,
                        alignItems: 'center'
                    }}>
                        <FlatList
                            data={hotelPartners}
                            style={{ flexBasis: 0, }}
                            scrollEnabled={true}
                            renderItem={(item) => {
                                return (
                                    <View style={{ margin: 10 }}>
                                        <TouchableOpacity onPress={() => {
                                            setPartner(item.item)
                                            if (item.item.lat !== null && item.item.long !== null) {
                                                setInitialRegion(
                                                    {
                                                        latitude: item.item.lat,
                                                        longitude: item.item.long,
                                                        latitudeDelta: 0.00922,
                                                        longitudeDelta: 0.00421,
                                                    }
                                                )
                                            }
                                            setModal(!modal)
                                        }}>
                                            <Image
                                                source={{ uri: item.item.img }}
                                                style={{
                                                    borderRadius: 26,
                                                    width: 130,
                                                    height: 130,
                                                    marginBottom: 5,
                                                }}
                                            /></TouchableOpacity>
                                    </View>
                                )
                            }}
                            key={(item) => item.id}
                            numColumns={2}
                        />
                    </View>

                </List.Accordion>

            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export { PartnerScreen }