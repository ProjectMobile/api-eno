import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';

function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Aqui faremos o Login, ao clicar no botão você navegará para o mapa :D </Text>
            <Button title='Go to Maps' onPress={()=> navigation.replace('Home')}></Button>
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
export {LoginScreen}