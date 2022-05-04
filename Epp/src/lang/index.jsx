import AsyncStorage from '@react-native-async-storage/async-storage';

const pt_br = require('./portuguese.json')
const es_uy = require('./spanish.json')

export async function selectLang(lang) {
    if (lang === 'pt-br') {
        await setLang(pt_br.code)
    }
    else if (lang == 'es-uy') {
        await setLang(es_uy.code)
    } else {
        console.log('error')
    }
}

async function setLang(lang) {
    await AsyncStorage.setItem('lang', lang)
}

export async function getLang() {
    const lang = await AsyncStorage.getItem('lang')
    return lang;
}

export async function language() {
    const code = await getLang()
    if (code == pt_br.code) {
        return pt_br
    }
    else {
        return es_uy
    }
}

