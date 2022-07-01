import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { getEvents27, getEvents28, getEvents29, setEvents } from '../../data/events'
import { useTranslation } from 'react-i18next'
import { List } from 'react-native-paper';
import { ModalPopUp } from '../../Components/modal/index'
import { colors } from '../../Components/colors/index'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import NetInfo from "@react-native-community/netinfo";



function EventsScreen({ navigation }) {



    const MyComponent = (props) => {
        const [expanded, setExpanded] = useState(() => {
            const today = new Date();
            if (today.getMonth() + 1 >= 7 && today.getDate() > 27) {
                return false
            } else { return true }
        });
        const [expanded2, setExpanded2] = useState(() => {
            const today = new Date();
            if (today.getMonth() + 1 >= 7 && today.getDate() > 28) {
                return false
            } else { return true }
        });
        const [expanded3, setExpanded3] = useState(() => {
            const today = new Date();
            if (today.getMonth() + 1 >= 7 && today.getDate() > 29) {
                return false
            } else { return true }
        });

        const handlePress = () => setExpanded(!expanded);
        const handlePress2 = () => setExpanded2(!expanded2);
        const handlePress3 = () => setExpanded3(!expanded3);
        return (
            <List.Section title="Eventos">


                <List.Accordion
                    title="Eventos do Dia 27"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}

                    onPress={handlePress}>
                    {
                        props.eventos27.map((event, index) => {
                            return (< List.Item title={event.name} key={event.id}

                                left={props => {
                                    const today = new Date();
                                    const eventDate = new Date(event.date)
                                    if (today.getMonth() + 1 > eventDate.getMonth() + 1) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else if (today.getMonth() + 1 >= eventDate.getMonth() + 1 && today.getUTCHours() > eventDate.getUTCHours()) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else { return <List.Icon {...props} icon="circle" color='green' /> }
                                }
                                }

                                onPress={() => {
                                    setVisible(!visible)
                                    setEventoModal(event)
                                }} />)
                        })
                    }
                </List.Accordion>

                <List.Accordion
                    title="Eventos do Dia 28"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded2}
                    onPress={handlePress2}>
                    {
                        props.eventos28.map((event, index) => {
                            return (< List.Item title={event.name} key={event.id}
                                left={props => {
                                    const today = new Date();
                                    const eventDate = new Date(event.date)
                                    if (today.getMonth() + 1 > eventDate.getMonth() + 1) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else if (today.getMonth() + 1 >= eventDate.getMonth() + 1 && today.getUTCHours() > eventDate.getUTCHours()) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else { return <List.Icon {...props} icon="circle" color='green' /> }
                                }
                                }
                                onPress={() => {
                                    setVisible(!visible)
                                    setEventoModal(event)
                                }} />)
                        })
                    }
                </List.Accordion>
                <List.Accordion
                    title="Eventos do Dia 29"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded3}
                    onPress={handlePress3}>
                    {
                        props.eventos29.map((event, index) => {
                            return (< List.Item title={event.name} key={event.id}
                                left={props => {
                                    const today = new Date();
                                    const eventDate = new Date(event.date)
                                    if (today.getMonth() + 1 > eventDate.getMonth() + 1) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else if (today.getMonth() + 1 >= eventDate.getMonth() + 1 && today.getUTCHours() > eventDate.getUTCHours()) {
                                        return <List.Icon {...props} icon="close" color='red' />
                                    }
                                    else { return <List.Icon {...props} icon="circle" color='green' /> }
                                }
                                }
                                onPress={() => {
                                    setVisible(!visible)
                                    setEventoModal(event)
                                }} />)
                        })
                    }
                </List.Accordion>

            </List.Section>
        );
    };


    const { t, i18n } = useTranslation()
    const [eventos27, setEventos27] = useState([])
    const [eventos28, setEventos28] = useState([])
    const [eventos29, setEventos29] = useState([])

    const [visible, setVisible] = useState(false)
    const [eventoModal, setEventoModal] = useState({})

    useEffect(() => {
        async function fetchData() {

            const eventosdia27 = await getEvents27();
            const eventosdia28 = await getEvents28();
            const eventosdia29 = await getEvents29();
            const daysList = [JSON.parse(eventosdia27), JSON.parse(eventosdia28), JSON.parse(eventosdia29)]
            const lang = i18n.language;
            daysList.forEach((element) => {
                var eventLanguage = []
                element.forEach((event) => {
                    if (event.language === lang) {
                        eventLanguage.push(event)
                    }
                })
                const date = new Date(eventLanguage[0].date)

                if (date.getDate() === 27) {
                    setEventos27(eventLanguage.sort((a, b) => (a.date > b.date) ? 1 : -1))
                }
                else if (date.getDate() === 28) {
                    setEventos28(eventLanguage.sort((a, b) => (a.date > b.date) ? 1 : -1))
                }
                else if (date.getDate() === 29) {
                    setEventos29(eventLanguage.sort((a, b) => (a.date > b.date) ? 1 : -1))
                }
            })
        }
        fetchData()
    }, []);

    function formattedDate(event) {
        const data = new Date(event)
        return String(data.getUTCHours()).padStart(2, '0') + ':' + String(data.getUTCMinutes()).padStart(2, '0')
    }


    return (
        <ScrollView >

            <ModalPopUp visible={visible}>
                <View style={{ height: '70%' }}>
                    <View style={{ marginBottom: '10%', flexDirection: 'row-reverse' }}>
                        <Icon name='close' size={20} color='black' onPress={() => { setVisible(!visible) }} />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ flexShrink: 1, fontSize: 16, color: 'red' }}>
                            {eventoModal.name}
                        </Text>
                        <Text style={{ flexShrink: 1, fontSize: 16 }}>
                            {eventoModal.description}
                        </Text>
                        <Text style={{ flexShrink: 1, fontSize: 16 }}>
                            {eventoModal.url}
                        </Text>
                    </View>

                    <Text style={{ flexShrink: 1, fontSize: 16 }}>
                        {formattedDate(eventoModal.date)}
                    </Text>

                    <View style={{ top: '70%' }}>
                        <Button icon="google-maps" mode="contained" color={colors.blue} onPress={() => {
                            navigation.navigate('Inicio', { screen: 'Home', params: eventoModal })
                        }} > Ver no Mapa </Button>
                    </View>

                </View>
            </ModalPopUp >

            <MyComponent
                eventos27={eventos27}
                eventos28={eventos28}
                eventos29={eventos29}
            ></MyComponent>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '100%'
    }, listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 28,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20
    },
    textResultItemList: {
        color: "red",
        fontSize: 16,
    },
    viewFromFlat: {
        flexDirection: 'row',
        borderWidth: 1,
        alignSelf: 'center',
        minWidth: '100%',
        margin: 1,
        marginBottom: 10,
        borderRadius: 4,
        borderTopWidth: 0,
        borderRightWidth: 0,
        padding: 10

    }
});
export { EventsScreen }