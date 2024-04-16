import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { adminDoccss } from '../../assets/css/styles';
import { adminDoct, delit, edit, add } from "../../assets";
import { ModalAdd,ModalDelete,ModalUpdate } from "../../components/modals";

export default AdminDoc = () => {
    const [modalEditarVisible, setModalEditarVisible] = useState(false);
    const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
    const [modalAnadirVisible, setModalAnadirVisible] = useState(false);
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
        <View style={adminDoccss.inicio}>
            <Image source={adminDoct} />
            <Text style={adminDoccss.h1}>Total de doctores</Text>
            <View style={adminDoccss.table}>
                <View style={adminDoccss.tableRow}>
                    <Text style={adminDoccss.tableHeader}>N°</Text>
                    <Text style={adminDoccss.tableHeader}>Nombre</Text>
                    <Text style={adminDoccss.tableHeader}>Apellido</Text>
                    <Text style={adminDoccss.tableHeader}>Editar</Text>
                    <Text style={adminDoccss.tableHeader}>Eliminar</Text>
                </View>
                {/* <ScrollView > */}
                {pacient.map((p) => (
                    <View style={adminDoccss.tableRow} key={p.id}>
                        <Text style={adminDoccss.tableCell}>{p.id}</Text>
                        <Text style={adminDoccss.tableCell}>{p.name}</Text>
                        <Text style={adminDoccss.tableCell}>{p.lastName}</Text>
                        <TouchableOpacity onPress={() => setModalEditarVisible(true)} style={adminDoccss.tableCell}>
                        <Image source={edit} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalEliminarVisible(true)} style={adminDoccss.tableCell}>
                        <Image source={delit} resizeMode="contain" />
                    </TouchableOpacity>
                    </View>
                ))}
                {/* </ScrollView> */}
            </View>
            <ModalUpdate visible={modalEditarVisible} onClose={() => setModalEditarVisible(false)} />
            <ModalDelete visible={modalEliminarVisible} onClose={() => setModalEliminarVisible(false)} />
            <ModalAdd visible={modalAnadirVisible} onClose={() => setModalAnadirVisible(false)} />
            {/* Botón para añadir */}
            <TouchableOpacity onPress={() => setModalAnadirVisible(true)}>
                <Image source={add} />
            </TouchableOpacity>
        </View>
    );
}