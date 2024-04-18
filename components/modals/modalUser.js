import React, { useState, useEffect } from "react";
import { Modal, Text, TextInput, View, TouchableOpacity, Alert, TimePickerAndroid  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { userM } from "../../assets/css/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doctor } from "../../assets";

const ModalUser = ({ visible, onClose, onSave, doctors }) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [fecha, setFecha] = useState('');
    const [isValidDate, setIsValidDate] = useState(true);
    const [hora, setHora] = useState('');
    const [isValidTime, setIsValidTime] = useState(true);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [userId, setUserId] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // console.log(doctors);
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

    const validarFecha = (input) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const isValidFormat = regex.test(input);

        if (!isValidFormat) {
            setIsValidDate(false);
            return false;
        }

        const [day, month, year] = input.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (year < currentYear || year > currentYear) {
            setIsValidDate(false);
            return false;
        }
        if (month == 1 || month > 12) {
            setIsValidDate(false);
            return false;
        }

        setIsValidDate(true);
        return true;
    };
    const validarHora = (input) => {
        const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        const isValidFormat = regex.test(input);

        setIsValidTime(isValidFormat);
        return isValidFormat;
    };
    const createAppointment = async () => {
        // if(fecha)
        const response = await fetch('http://192.168.65.103:4000/api/appointments', {
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

        if (response.ok) {
            // console.log(' la cita se creo');
            Alert.alert('Exitoso','La cita se agendo correctamente');
        }

        const data = await response.json();
        // console.log(data);
    };

    const guardarCita = () => {
        if (selectedDoctor) { // Verificar que se haya seleccionado un doctor
            createAppointment().catch((error) => console.error(error));
            onSave(nombrePaciente, selectedDoctor, fecha, hora);
        } else {
            if (doctors.length > 0) {
                const selectedDoctor = doctors[0].id;
                // console.log(selectedDoctor);
                createAppointment().catch((error) => console.error(error));
            onSave(nombrePaciente, selectedDoctor, fecha, hora);
            } else {
                Alert.alert("Uppss!","No hay doctores disponibles.");
            };
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
                                <Picker.Item key={doctor.id} label={doctor.username} value={doctor.id} />
                            ))}
                        </Picker>
                    )}
                    <Text>Fecha:</Text>
            <TextInput
                value={fecha}
                placeholder={'DD/MM/AAAA'}
                onChangeText={(text) => {
                    setFecha(text);
                    validarFecha(text);
                }}
                style={{ borderWidth: 1,height:30, borderColor: isValidDate ? 'gray' : 'red' }}
            />
            {!isValidDate && <Text style={{ color: 'red' }}>Formato de fecha inválido o año incorrecto.</Text>}
            <Text>Hora 24hrs:</Text>
            <TextInput
                value={hora}
                placeholder={'HH:MM'}
                onChangeText={(text) => {
                    setHora(text);
                    validarHora(text);
                }}
                style={{ borderWidth: 1,height:30,marginBottom:30, borderColor: isValidTime ? 'gray' : 'red' }}
            />
            {!isValidTime && <Text style={{ color: 'red' }}>Formato de hora inválido.</Text>}

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