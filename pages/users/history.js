import { View, Image, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { historial } from '../../assets/css/styles';
import { doctor } from "../../assets";

export default Historial = () => {
    const loginUser = {
        username: 'Israel',
        data: '02/04/2024',
        time: '13:45',
        doctor: 'Jorge',
        area: 'Pediatria'
    };
    const histo = [
        { id: 1, fecha: '05/10/2024', hora: '12:50', doctor: 'Braulio', area: 'Pediatria' },
        { id: 2, fecha: '05/10/2024', hora: '15:00', doctor: 'Jose', area: 'Pediatria' },
        { id: 3, fecha: '10/10/2024', hora: '13:10', doctor: 'Jorge', area: 'Pediatria' },
        { id: 4, fecha: '03/10/2024', hora: '17:00', doctor: 'Giovanny', area: 'Pediatria' },
        { id: 5, fecha: '09/10/2024', hora: '07:20', doctor: 'Brayan', area: 'Pediatria' },
        { id: 6, fecha: '20/10/2024', hora: '08:00', doctor: 'Stayli', area: 'Pediatria' },
        { id: 7, fecha: '26/10/2024', hora: '10:50', doctor: 'Williams', area: 'Pediatria' },
        { id: 8, fecha: '28/10/2024', hora: '15:00', doctor: 'Carla', area: 'Pediatria' },
    ];
    return (
        <View style={historial.inicio}>
            <View style={historial.card}>
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
            <Text style={historial.h1}>Historial de citas</Text>
            <View style={historial.centeredView}>
                    <ScrollView contentContainerStyle={historial.scrollViewContent}>
                {histo.map((h) => (
                        <View style={historial.card}>
                            <View style={historial.textContainer}>
                                <Text style={historial.h2}>Fecha: {h.fecha}</Text>
                                <Text style={historial.p}>Hora: {h.hora}</Text>
                                <Text style={historial.p}>Doctor: {h.doctor}</Text>
                                <Text style={historial.p}>Area: {h.area}</Text>
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
    );
}