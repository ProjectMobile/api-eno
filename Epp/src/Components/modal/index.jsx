import React from "react"
import { Modal, StyleSheet, View } from "react-native"

const ModalPopUp = ({ visible, children }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={styles.modalBackGround}>
                <View style={[styles.modalContainer]}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        elevation: 20
    },
})

export { ModalPopUp }