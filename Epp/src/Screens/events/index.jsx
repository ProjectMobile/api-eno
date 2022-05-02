import { useEffect } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import {getEvents} from '../../data/events'

function EventsScreen({navigation}) {

    useEffect(() => {
            console.log(getEvents())
    }, [])

    return (
        <View style={styles.container}>
            <Text>EVENTOS</Text>
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
export {EventsScreen}