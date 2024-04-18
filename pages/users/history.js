import { View, Image, Text, ScrollView,KeyboardAvoidingView,Platform } from "react-native";
import React, { useState,useEffect } from "react";
import { historial } from '../../assets/css/styles';
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterNav from '../../components/footer/FooterNav';
import { doctor } from "../../assets";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Historial = () => {
    const [userId, setUserId] = useState(null);
    const [citas, setCitas] = useState([]);
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

                const citaMasReciente = citas.filter(cita =>
                    cita.id_user === userId &&
                    new Date(cita.createdAt) >= twentyFourHoursAgo &&
                    new Date(cita.createdAt) <= now
                ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

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
                        username: cita.username,
                        data: cita.data,
                        time: cita.time,
                        doctor: cita.doctorName,
                    });
                }
            }).catch(error => {
                console.error('Error al obtener la cita más reciente:', error);
            });
        }
        const fetchCitas = async (userId) => {
            try {
                const response = await fetch(`http://192.168.65.103:4000/api/appointments?userId=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener las citas');
                }

                const citas = await response.json();
                setCitas(citas);
                // console.log(citas);
            } catch (error) {
                console.error('Error al obtener las citas:', error);
            }
        };

        if (userId) {
            fetchCitas(userId);
        }
        
    }, [userId]);

    const [loginUser, setLoginUser] = useState({
        username: '',
        data: '',
        time: '',
        doctor: '',
        area: ''
    });
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    return (
        <KeyboardAvoidingView style={historial.inicio} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <NavbarUser />
        <View style={historial.inicio}>
            <View style={historial.card}>
                <View style={historial.textContainer}>
                    <Text style={historial.h2}>Bienvenid@ {loginUser.username} su proxima cita es:</Text>
                    <Text style={historial.p}>Fecha: {loginUser.data}</Text>
                    <Text style={historial.p}>Hora: {loginUser.time}</Text>
                    <Text style={historial.p}>Doctor: {loginUser.doctor}</Text>
                    {/* <Text style={historial.p}>Area: {loginUser.area}</Text> */}
                </View>
                <Image
                    source={doctor}
                    style={historial.imageStyle}
                />
            </View>
            <Text style={historial.h1}>Historial de citas</Text>
            <View style={historial.centeredView}>
                    <ScrollView contentContainerStyle={historial.scrollViewContent}>
                {citas.map((h) => (
                        <View style={historial.card}>
                            <View style={historial.textContainer}>
                                <Text style={historial.h2}>Fecha: {h.data}</Text>
                                <Text style={historial.p}>Hora: {h.time}</Text>
                                <Text style={historial.p}>Doctor: {h.doctorName}</Text>
                                {/* <Text style={historial.p}>Area: {h.area}</Text> */}
                            </View>
                            <Image
                                source={doctor}
                                style={historial.imageStyle}
                            />
                        </View>
                ))}
                    </ScrollView>
            </View>
        </View>
        {!keyboardStatus && <FooterNav />}

        </KeyboardAvoidingView>
    );
}