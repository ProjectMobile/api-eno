import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { getEvents, setEvents } from '../../data/events'
import { useTranslation } from 'react-i18next'
import { axiosEvents } from '../../axios/'
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
function EventsScreen({ navigation }) {
    const { t, i18n } = useTranslation()
    const [eventos, setEventos] = useState([])

    useEffect(() => {

        axios.get('http://192.168.1.142:3030/api/event').then(function (response) {
            setEvents(response.data)
        }).catch(function (error) {
            console.log(error.message)
        })

        async function fetchData() {

            const events = await getEvents();
            const lang = i18n.language;
            var eventLanguage = []
            const eventsLLL = JSON.parse(events)
            eventsLLL.forEach(evento => {
                if (evento.language === lang) {
                    eventLanguage.push(evento)
                }
            })


            setEventos(eventLanguage.sort((a, b) => (a.date > b.date) ? 1 : -1))


        }
        fetchData()
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={eventos}
                renderItem={({ item }) => {
                    const newDate = new Date(item.date)
                    const formattedDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
                    const formattedHour = `${newDate.getHours()}:${newDate.getMinutes()}`
                    return (<View style={styles.viewFromFlat}>
                        <Text style={{ fontSize: 18, flexShrink: 1 }} onPress={() => {  }} > {item.name}</Text>
                        <Text style={{ fontSize: 18, flexShrink: 1 }} onPress={() => { }} > {formattedDate}</Text>
                        <Text style={{ fontSize: 18, flexShrink: 1 }} onPress={() => { navigation.navigate('Inicio') }} > {formattedHour}</Text>

                    </View>
                    )


                }}
                keyExtractor={eventos => eventos.id}
                scrollEnabled={true}
            />

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        maxWidth: '100%',
        alignSelf: 'center',
        minWidth: '100%', margin: 1,
        marginBottom: 10,
        borderRadius: 4,
        borderTopWidth: 0,
        borderRightWidth: 0,
        padding: 10

    }
});
export { EventsScreen }