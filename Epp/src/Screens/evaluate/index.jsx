import { View, Text, Dimensions, Linking } from "react-native";
import { Button } from 'react-native-paper';




function Evaluate() {
    return (
        <View style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
        }}>

            <Text>
                LEVEI


            </Text>


            <View style={{
                left: 0, right: 0, bottom: 0
            }}>
                <Button icon="star" mode="contained" color={'white'} style={{ width: Dimensions.get('screen').width * 0.55, alignSelf: 'center', borderColor: 'green', borderWidth: 2, borderRadius: 20 }} onPress={() => {
                    Linking.openURL('https://youtube.com')
                }} > Avaliar</Button>
            </View>

        </View>
    )
}

export { Evaluate }