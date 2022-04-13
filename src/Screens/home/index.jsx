import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { Maps } from '../../Components/maps/'
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Maps />
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

export { HomeScreen }
