import { View, Image, Text, Button, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState,useEffect } from "react";
import { user } from '../../assets/css/styles';
import ModalUser from "../../components/modals/modalUser";
import { doctor, pediatria, nutricion, ginecoligia, dermatologia, psiquiatra, oftamologia } from "../../assets";
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterNav from '../../components/footer/FooterNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useInterval from "../../components/interval/interval";


export default Users = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [userId, setUserId] = useState(null);
    const [loginUser, setLoginUser] = useState({
        username: '',
        data: '',
        time: '',
        doctor: '',
        area: ''
    });
    const [citaData, setCitaData] = useState({
        nombrePaciente: '',
        doctorSeleccionado: '',
        fecha: '',
        hora: ''
    });

    useEffect(() => {
        const fetchUserId = async () => {
            const result = await AsyncStorage.getItem('userId');
            if (result) {
                const parsedResult = JSON.parse(result);
                const userId = parsedResult.data;
                setUserId(userId);
                // console.log('userId:', userId);

                const user = await getUsers(userId);
                if (user) {
                    setLoginUser(prevState => ({
                        ...prevState,
                        username: user.username
                    }));
                }
            }
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        
    }, [userId]);
    useInterval(() => {
        const getCitaMasReciente = async (userId) => {
            try {
                const now = new Date();
                const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

                const response = await fetch('http://192.168.65.103:4000/api/appointments', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener las citas');
                }

                const citas = await response.json();

                const citaMasReciente = citas.reduce((prev, curr) => {
                    const prevDate = new Date(prev.data + ' ' + prev.time);
                    const currDate = new Date(curr.data + ' ' + curr.time);
                    const prevDiff = Math.abs(prevDate.getTime() - now.getTime());
                    const currDiff = Math.abs(currDate.getTime() - now.getTime());
                    return prevDiff < currDiff ? prev : curr;
                });

                // console.log('Cita más reciente:', citaMasReciente);
                return citaMasReciente;
            } catch (error) {
                console.error('Error al obtener las citas:', error);
                return null;
            }
        };

        if (userId) {
            getCitaMasReciente(userId).then(cita => {
                if (cita) {
                    setLoginUser({
                        username: cita.userName,
                        data: cita.data,
                        time: cita.time,
                        doctor: cita.doctorName,
                    });
                    console.log(cita);
                }
            }).catch(error => {
                console.error('Error al obtener la cita más reciente:', error);
            });
        }
    },2000);

    const openModal = async (area) => {
        const doctors = await getDoctors(area);
        setModalVisible(true);
        setSelectedDoctor(doctors);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const onSave = async (nombrePaciente, doctorSeleccionado, fecha, hora) => {
        const id_doctor = doctorSeleccionado.id; // Suponiendo que el objeto doctorSeleccionado tiene un campo id
        console.log('id ',id_doctor);
        try {
            const response = await fetch('http://192.168.65.103:4000/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user: userId,
                    id_doctor, // Aquí se incluye el id_doctor
                    nombrePaciente,
                    fecha,
                    hora
                }),
            });
    
           
            closeModal();
        } catch (error) {
            console.error('Error al crear la cita:', error);
        }
    };
    

    const getUsers = async (userId) => {
        try {
            const response = await fetch('http://192.168.65.103:4000/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Error al obtener los usuarios');
            }
    
            const data = await response.json();
            const userlog = data.find(user => user._id === userId);
            return userlog;
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    

    const getDoctors = async (specialty) => {
        try {
            const response = await fetch('http://192.168.65.103:4000/api/doctors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener los doctores');
            }

            const data = await response.json();
            // Filtrar los doctores por especialidad
            const filteredDoctors = data.filter(doctor => doctor.specialty === specialty);
            const doctorNames = filteredDoctors.map(doctor => doctor.name);
            console.log('Doctores de', specialty, ':', filteredDoctors);
            return filteredDoctors;
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    const areas = [
        { id: 1, img: pediatria, area: 'PEDIATRIA' },
        { id: 2, img: nutricion, area: 'NUTRICION' },
        { id: 3, img: ginecoligia, area: 'GINECOLOGIA' },
        { id: 4, img: dermatologia, area: 'DERMATOLOGIA' },
        { id: 5, img: oftamologia, area: 'OFTAMOLOGIA' },
        { id: 6, img: psiquiatra, area: 'PSIQUIATRA' },
    ];

    return (
        <KeyboardAvoidingView style={user.inicio} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <NavbarUser />
            <View style={user.card}>
                <View style={user.textContainer}>
                    <Text style={user.h2}>Bienvenid@ {loginUser.username} su proxima cita es:</Text>
                    <Text style={user.p}>Fecha: {loginUser.data}</Text>
                    <Text style={user.p}>Hora: {loginUser.time}</Text>
                    <Text style={user.p}>Doctor: {loginUser.doctor}</Text>
                </View>
                <Image
                    source={doctor}
                    style={user.imageStyle}
                />
            </View>
            <Text style={user.h1}>Agendar nueva cita</Text>
            {/* Menu */}
            <View style={user.container}>
                {/* Mini card */}
                {areas.map((area) => (
                    <View style={user.minicard} key={area.id}>
                        <TouchableOpacity onPress={() => openModal(area.area)}>
                            <Image
                                source={area.img}
                                style={user.imageStyle}
                            />
                            <Text style={user.pc}>{area.area}</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => getCitaMasReciente(userId)}>
                            <Image
                                source={area.img}
                                style={user.imageStyle}
                            />
                            <Text style={user.pc}>{area.area}</Text>
                        </TouchableOpacity> */}
                    </View>
                ))}
            </View>
            <ModalUser visible={modalVisible} onClose={closeModal} onSave={onSave} doctors={selectedDoctor} />
            {!keyboardStatus && <FooterNav />}

        </KeyboardAvoidingView>
    );
};
