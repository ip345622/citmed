import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { pacientes } from '../../assets/css/styles';
import { doctor, usersDoc } from "../../assets";

export default Pacientes = () => {
    const pacient = [
        { id: 1, name: 'Jorge', lastName: 'Gomez' },
        { id: 2, name: 'Carol', lastName: 'Perez' },
        { id: 3, name: 'Samuel', lastName: 'Jimenez' },
        { id: 4, name: 'Mario', lastName: 'Lopez' },
        { id: 5, name: 'Maria', lastName: 'Uc' },
        { id: 6, name: 'Ricardo', lastName: 'Chan' },
        { id: 7, name: 'Alejandra', lastName: 'De los santos' },
        { id: 8, name: 'Alejandra', lastName: 'De los santos' },
        { id: 9, name: 'Alejandra', lastName: 'De los santos' },
        { id: 10, name: 'Alejandra', lastName: 'De los santos' },
    ];
    return (
        <View style={pacientes.inicio}>
            <Image source={usersDoc} />
            <Text style={pacientes.h1}>Total de pacientes por hoy</Text>
            <View style={pacientes.table}>
                <View style={pacientes.tableRow}>
                    <Text style={pacientes.tableHeader}>N°</Text>
                    <Text style={pacientes.tableHeader}>Nombre</Text>
                    <Text style={pacientes.tableHeader}>Apellido</Text>
                </View>
                {/* <ScrollView > */}
                    {pacient.map((p) => (
                        <View style={pacientes.tableRow} key={p.id}>
                            <Text style={pacientes.tableCell}>{p.id}</Text>
                            <Text style={pacientes.tableCell}>{p.name}</Text>
                            <Text style={pacientes.tableCell}>{p.lastName}</Text>
                        </View>
                    ))}
                {/* </ScrollView> */}
            </View>
        </View>
    );
}