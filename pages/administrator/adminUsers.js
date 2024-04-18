import { View, Image, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView,
    Platform, } from "react-native";
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterAdmin from "../../components/footer/FooterAdmin";
import React, { useState,useEffect } from "react";
import { adminDoccss } from '../../assets/css/styles';
import useInterval from "../../components/interval/interval";
import { adminUser, delit, edit, add } from "../../assets";
import { ModalAdd,ModalDelete,ModalUpdate } from "../../components/modals";

export default AdminUsers = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [modalEditarVisible, setModalEditarVisible] = useState(false);
    const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
    const [modalAnadirVisible, setModalAnadirVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

    const [user, setUser] = useState([]);

    useEffect(() => {
    

        getUser();
      }, []);
    
      useInterval(() => {
        getUser();
      }, 2000);
      const getUser = async () => {
        const response = await fetch("http://192.168.65.103:4000/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener los doctores");
        }
        const users = await response.json();
        const users2 = await users.filter(user => user.rol === 'user');
        setUser(users2);
        // console.log(doctors);
      };
    return (
        <KeyboardAvoidingView
      style={adminDoccss.inicio}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <NavbarUser />
        <View style={adminDoccss.inicio}>
            <Image source={adminUser} />
            <Text style={adminDoccss.h1}>Total de pacientes</Text>
            <View style={adminDoccss.table}>
                <View style={adminDoccss.tableRow}>
                    <Text style={adminDoccss.tableHeader}>N°</Text>
                    <Text style={adminDoccss.tableHeader}>Nombre</Text>
                    <Text style={adminDoccss.tableHeader}>Correo</Text>
                    <Text style={adminDoccss.tableHeader}>Eliminar</Text>
                </View>
                {/* <ScrollView > */}
                {user.map((p, index) => (
                    <View style={adminDoccss.tableRow} key={p.id}>
                        <Text style={adminDoccss.tableCell}>{index + 1}</Text>
                        <Text style={adminDoccss.tableCell}>{p.username}</Text>
                        <Text style={adminDoccss.tableCell}>{p.email}</Text>
                    <TouchableOpacity onPress={() => {
                        setModalEliminarVisible(true)
                        setSelectedUser(p._id)
                        }} style={adminDoccss.tableCell}>
                        <Image source={delit} resizeMode="contain" />
                    </TouchableOpacity>
                    </View>
                ))}
                {/* </ScrollView> */}
            </View>
            <ModalDelete visible={modalEliminarVisible} doctor={selectedUser} onClose={() => setModalEliminarVisible(false)} />
        </View>
        {!keyboardStatus && <FooterAdmin />}
    </KeyboardAvoidingView>
    );
}