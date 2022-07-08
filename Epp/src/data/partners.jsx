import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getPartners() {
    const partners = AsyncStorage.getItem('@partners')
    return partners;
}
export async function setPartners(partners) {
    console.log(partners)
    return AsyncStorage.setItem('@partners', JSON.stringify(partners)).then(json => console.log('success!'))
        .catch(error => console.log('error!'));
}