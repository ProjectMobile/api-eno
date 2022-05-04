import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { getEvents } from '../../data/events'
import {useTranslation} from 'react-i18next'

function EventsScreen({ navigation }) {
    const {t, i18n} = useTranslation()
    const [eventos, setEventos] = useState([])

    useEffect(() => {
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

            setEventos(eventLanguage)


        }
        fetchData()
    })

    return (
        <View style={styles.container}>
            <Text>{t("event")}</Text>
            <View style={{ position: 'absolute', width: '100%', 'height': '60%', bottom: 20 }}>
                <FlatList
                    data={eventos}
                    renderItem={({ item }) => {
                        return (<View style={{flexDirection:'row', borderWidth:1}}>
                            <Text>{item.name}</Text>
                            <Text>{'                                     '}</Text>
                            <Text>{item.language}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={eventos => eventos.id}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});
export { EventsScreen }