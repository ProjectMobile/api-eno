import AsyncStorage from '@react-native-async-storage/async-storage';


export async function setEvents(events) {
    return AsyncStorage.setItem('@events', JSON.stringify(events)).then(json => console.log('success!'))
        .catch(error => console.log('error!'));
}

export async function getEvents() {
    const eventos = AsyncStorage.getItem('@events')
    return eventos
}