import React, { useState, useEffect } from "react";
import { Modal, Text, TextInput, View, TouchableOpacity, DatePickerAndroid, TimePickerAndroid  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { userM } from "../../assets/css/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalUser = ({ visible, onClose, onSave, doctors }) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [userId, setUserId] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const result = await AsyncStorage.getItem('userId');
            if (result) {
                const parsedResult = JSON.parse(result);
                const userId = parsedResult.data;
                setUserId(userId);
                console.log('userId:', userId);
            }
        };

        fetchUserId();
    }, []);

    const createAppointment = async () => {
        const response = await fetch('http://192.168.100.9:4000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_user: userId,
                id_doctor: selectedDoctor,
                data: fecha,
                time: hora,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const data = await response.json();
        console.log(data);
    };

    const guardarCita = () => {
        if (selectedDoctor) { // Verificar que se haya seleccionado un doctor
            createAppointment().catch((error) => console.error(error));
            onSave(nombrePaciente, selectedDoctor, fecha, hora);
        } else {
            console.error('Debes seleccionar un doctor');
        }
    };
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={userM.centeredView}>
                <View style={userM.modalView}>
                    <Text style={userM.close} onPress={onClose}>X</Text>
                    <Text>Seleccionar doctor:</Text>
                    {doctors && doctors.length > 0 && (
                        <Picker
                            selectedValue={selectedDoctor}
                            onValueChange={(itemValue) => setSelectedDoctor(itemValue)}>
                            {doctors.map((doctor, index) => (
                                <Picker.Item key={index} label={doctor.name} value={doctor.id} />
                            ))}
                        </Picker>
                    )}
                    <Text>Fecha:</Text>
                    <TextInput
                        value={fecha}
                        placeholder={'DD/MM/AAAA'}
                        onChangeText={setFecha}
                    />
                    <Text>Hora 24hrs:</Text>
                    <TextInput
                        value={hora}
                        placeholder={'HH:MM'}
                        onChangeText={setHora}
                    />
                    <View style={userM.buttons}>
                        <TouchableOpacity style={userM.button} onPress={guardarCita}>
                            <Text style={userM.button}>Guardar</Text>
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

export default ModalUser;