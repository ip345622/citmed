import React, { useState } from 'react';
import { Modal, View, Text,  TouchableOpacity,Alert } from 'react-native';
import { userM } from "../../assets/css/styles";


const ModalDelete = ({ visible, onClose,doctor }) => {
    console.log(doctor);
    const deleteDoctor = async(doctor) => {
        try {
            const response = await fetch(`http://192.168.65.103:4000/api/doctor/${doctor}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.json());
        // if(response.ok){
        //     Alert.alert("Eliminado",'Doctor eliminado correctamente');
        // onClose();
        // }
            console.log(doctor);
            const response2 = await fetch(`http://192.168.65.103:4000/api/user/${doctor}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.json());
        if(response2.ok){
            Alert.alert("Eliminado",'Usuario eliminado correctamente');
        onClose();
        }
        
        } catch (error) {
            console.log(error);
        }
    };
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
                        <TouchableOpacity style={userM.button} onPress={() => deleteDoctor(doctor)}>
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
