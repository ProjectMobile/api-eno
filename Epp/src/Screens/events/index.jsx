import { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { getEvents } from '../../data/events'
import { getLang } from '../../lang'

function EventsScreen({ navigation }) {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const events = await getEvents();
            const lang = await getLang();
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
            <Text>EVENTOS</Text>
            <View style={{ position: 'relative', width: '100%', 'height': '60%', bottom: 20 }}>
                <FlatList
                    data={eventos}
                    renderItem={({ item }) => {
                        return (
                            <Text>{item.name}</Text>
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