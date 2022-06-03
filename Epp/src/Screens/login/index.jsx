import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { setEvents, getEvents } from '../../data/events'
import axios from 'axios'
import { Checkbox } from 'react-native-paper';
import { colors } from '../../Components/colors';
import { useTranslation } from 'react-i18next';
function LoginScreen({ navigation }) {
    const [portugueseCheck, setPortugueseCheck] = useState(false)
    const [spanishCheck, setSpanishCheck] = useState(false);
    const {t, i18n}= useTranslation();

    useEffect(() => {
        if (i18n.language === 'pt') {
            setPortugueseCheck(true)
        } else { setSpanishCheck(true) }
    })

    useEffect(() => {

        //ip casa 192.168.3.182
        //ip uni 10.2.170.39
        axios.get('http://192.168.1.142:3030/api/event').then(function (response) {
            setEvents(response.data)
        }).catch(function (error) {
            console.log(error.message)
        })
    }, [])

    return (
        <View style={styles.container}>

<View style={styles.viewHorizontal}>
                <Image
                    source={require('../../../assets/br.png')}
                    style={{
                        width: 60,
                        height: 40,
                    }}
                />
                <Checkbox
                    disabled={false}
                    status={portugueseCheck ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (portugueseCheck) {

                        } else {
                            setPortugueseCheck(!portugueseCheck);
                            setSpanishCheck(!spanishCheck);
                            i18n.changeLanguage('pt')
                        }


                    }}
                />
            </View>
            <View style={styles.viewHorizontal}>
                <Image
                    source={require('../../../assets/ur.png')}
                    style={{
                        width: 60,
                        height: 40,
                    }}
                />
                <Checkbox
                    disabled={false}
                    status={spanishCheck ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (spanishCheck) { } else {
                            setSpanishCheck(!spanishCheck);
                            setPortugueseCheck(!portugueseCheck);
                            i18n.changeLanguage('es')
                        }

                    }}
                />
            </View>

            <Text>{t("welcome")}</Text>
            <Button title={`${t('button')}`} onPress={() => {
                if (!portugueseCheck && !spanishCheck) {
                    Alert.alert('None selected')
                }
                else {
                    if (portugueseCheck) {
                        console.log('PORTUGUES')
                    }
                    else {
                        console.log('SPANISH')
                    }
                    navigation.replace('Home')
                }
            }



            }></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewHorizontal: {
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width * 0.2,
        flexDirection: 'row'
    },
    text: { color: `${colors.green}`, fontSize: 25 }
});
export { LoginScreen }