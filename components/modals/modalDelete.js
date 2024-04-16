import React, { useState } from 'react';
import { Modal, View, Text,  TouchableOpacity } from 'react-native';
import { userM } from "../../assets/css/styles";


const ModalDelete = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={userM.centeredView}>
                <View style={userM.modalView}>
                    <Text style={userM.close} onPress={onClose}>X</Text>
                    <Text style={userM.h1}>¿Estás seguro que deseas eliminar?</Text>
                    <View style={userM.buttons}>
                        <TouchableOpacity style={userM.button} onPress={() => console.log('Eliminando')}>
                            <Text style={userM.button}>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={userM.button2} onPress={onClose}>
                            <Text style={userM.button2}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalDelete;
