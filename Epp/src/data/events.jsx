import AsyncStorage from '@react-native-async-storage/async-storage';


export async function setEvents27(events) {
    return AsyncStorage.setItem('@events27', JSON.stringify(events)).then(json => console.log(''))
        .catch(error => console.log('error!'));
}

export async function asyncClear() {
    AsyncStorage.clear().then(() => {
        console.log('cleaned')
    })
}

export async function getEvents27() {
    const eventos = AsyncStorage.getItem('@events27')
    return eventos
}

export async function setEvents28(events) {
    return AsyncStorage.setItem('@events28', JSON.stringify(events)).then(json => console.log(''))
        .catch(error => console.log('error!'));
}

export async function getEvents28() {
    const eventos = AsyncStorage.getItem('@events28')
    return eventos
}

export async function setEvents29(events) {
    return AsyncStorage.setItem('@events29', JSON.stringify(events)).then(json => console.log(''))
        .catch(error => console.log('error!'));
}

export async function getEvents29() {
    const eventos = AsyncStorage.getItem('@events29')
    return eventos
}
export async function getEvents30() {
    const eventos = AsyncStorage.getItem('@events30')
    return eventos
}
export async function setEvents30(events) {
    return AsyncStorage.setItem('@events30', JSON.stringify(events)).then(json => console.log(''))
        .catch(error => console.log('error!'));
}



export var isLoaded = false;

export function changeIsLoaded(){
    isLoaded = true;
}

export function loader() {
    if (isLoaded) {
        isLoaded = false;
        return true;
    } else {
        return false;
    }
}