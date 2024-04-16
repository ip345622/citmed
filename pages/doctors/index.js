import { View, Image, Text,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { doctorH, historial } from '../../assets/css/styles';
import { doctor,usersDoc } from "../../assets";

export default Doctor = () => {
    const loginUser = {
        username: 'Israel',
        data: '02/04/2024',
        time: '13:45',
        doctor: 'Jorge',
        area: 'Pediatria'
    };
    return (
        <View style={doctorH.inicio}>
            <View style={doctorH.card}    >
                <View style={historial.textContainer}>
                    <Text style={historial.h2}>Bienvenid@ {loginUser.username} su proxima cita es:</Text>
                    <Text style={historial.p}>Fecha: {loginUser.data}</Text>
                    <Text style={historial.p}>Hora: {loginUser.time}</Text>
                    <Text style={historial.p}>Doctor: {loginUser.doctor}</Text>
                    <Text style={historial.p}>Area: {loginUser.area}</Text>
                </View>
                <Image
                    source={doctor}
                    style={historial.imageStyle}
                />
            </View>
            <View style={doctorH.card}>
                <View style={historial.textContainer}>
                    <Text style={historial.h2}>Pacientes totales: 7</Text>
            <TouchableOpacity onPress={() => console.log('Pacientes')}>
                    <Text style={doctorH.p}>Ver más</Text>
                </TouchableOpacity>
                </View>
                <Image
                    source={usersDoc}
                    style={historial.imageStyle}
                />
            </View>
        </View>
    );
}