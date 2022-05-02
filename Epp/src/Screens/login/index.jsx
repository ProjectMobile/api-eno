import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { setEvents, getEvents } from '../../data/events'
import axios from 'axios'
import { Checkbox } from 'react-native-paper';
import { colors } from '../../Components/colors';
function LoginScreen({ navigation }) {
    const [portugueseCheck, setPortugueseCheck] = useState(false)
    const [spanishCheck, setSpanishCheck] = useState(false);
    const [disablePortuguese, setDisablePortuguese] = useState(false)
    const [disableSpanish, setDisableSpanish] = useState(false)


    // useEffect(() => {

    //     //ip casa 192.168.3.182
    //     //ip uni 10.2.170.39
    //     axios.get('http://10.2.170.39:3030/api/event').then(function (response) {
    //         setEvents(response.data)
    //         console.log(getEvents())
    //     }).catch(function (error) {
    //         console.log(error.message)
    //     })
    // }, [])

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
                    disabled={disablePortuguese}
                    status={portugueseCheck ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setPortugueseCheck(!portugueseCheck);
                        setDisableSpanish(!disableSpanish);
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
                    disabled={disableSpanish}
                    status={spanishCheck ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setSpanishCheck(!spanishCheck);
                        setDisablePortuguese(!disablePortuguese);
                    }}
                />
            </View>

            <Text>Aqui faremos o Login, ao clicar no botão você navegará para o mapa :D </Text>
            <Button title='Go to Maps' onPress={() => {
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