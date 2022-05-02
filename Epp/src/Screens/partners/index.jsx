import { Dimensions, FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';

function PartnerScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>PARCEIROS</Text>
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
export {PartnerScreen}