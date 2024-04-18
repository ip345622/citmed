import { View, Image, Text,TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from "react";
import { doctorH, historial } from '../../assets/css/styles';
import { doctor,usersDoc } from "../../assets";
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterDoc from "../../components/footer/FooterDoc";
import { useNavigation } from '@react-navigation/native';

export default Doctor = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [userId, setUserId] = useState(null);
    const [cantidadCitas, setcantidadCitas] = useState(null);
  const navigation = useNavigation();


    const [loginUser, setLoginUser] = useState({
        username: '',
        data: '',
        time: '',
        doctor: '',
        area: ''
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
                // console.log(userId);

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
                        username: cita.doctorName,
                        data: cita.data,
                        time: cita.time,
                        doctor: cita.userName,
                    });
                    // console.log(cita);
                }
            }).catch(error => {
                console.error('Error al obtener la cita más reciente:', error);
            });
        }

        const getCantidadCitas = async(userId) => {
            const response = await fetch('http://192.168.65.103:4000/api/appointments', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const citas = await response.json();
                const citasTotales = citas.filter(cita =>
                    cita.id_doctor === userId );
                    const cantidadCitas = citasTotales.length;
                    setcantidadCitas(cantidadCitas);
    console.log('Cantidad de citas:', cantidadCitas);
    // return cantidadCitas;
        }
        getCantidadCitas(userId);
    }, [userId]);
    return (
        <KeyboardAvoidingView style={doctorH.inicio} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <NavbarUser />
        <View style={doctorH.inicio}>
            <View style={doctorH.card}    >
                <View style={historial.textContainer}>
                    <Text style={historial.h2}>Bienvenid@ {loginUser.username} su proxima cita es:</Text>
                    <Text style={historial.p}>Fecha: {loginUser.data}</Text>
                    <Text style={historial.p}>Hora: {loginUser.time}</Text>
                    <Text style={historial.p}>Paciente: {loginUser.doctor}</Text>
                </View>
                <Image
                    source={doctor}
                    style={historial.imageStyle}
                />
            </View>
            <View style={doctorH.card}>
                <View style={historial.textContainer}>
                    <Text style={historial.h2}>Pacientes totales: {cantidadCitas}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Pacientes")}>
                    <Text style={doctorH.p}>Ver más</Text>
                </TouchableOpacity>
                </View>
                <Image
                    source={usersDoc}
                    style={historial.imageStyle}
                />
            </View>
        </View>
        {!keyboardStatus && <FooterDoc />}

        </KeyboardAvoidingView>
    );
}