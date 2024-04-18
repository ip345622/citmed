import {
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { adminDoccss } from "../../assets/css/styles";
import { adminDoct, delit, edit, add } from "../../assets";
import { ModalAdd, ModalDelete,ModalUpdate } from "../../components/modals";
import useInterval from "../../components/interval/interval";
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterAdmin from "../../components/footer/FooterAdmin";

export default AdminDoc = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [modalAnadirVisible, setModalAnadirVisible] = useState(false);

  useEffect(() => {
    

    getDoctors();
  }, []);

  useInterval(() => {
    getDoctors();
  }, 2000);
  const getDoctors = async () => {
    const response = await fetch("http://192.168.65.103:4000/api/doctors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al obtener los doctores");
    }
    const doctors = await response.json();
    setDoctors(doctors);
    // console.log(doctors);
  };

  return (
    <KeyboardAvoidingView
      style={adminDoccss.inicio}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <NavbarUser />
      <View style={adminDoccss.inicio}>
        <Image source={adminDoct} />
        <Text style={adminDoccss.h1}>Total de doctores</Text>
        <View style={adminDoccss.table}>
          <View style={adminDoccss.tableRow}>
            <Text style={adminDoccss.tableHeader}>N°</Text>
            <Text style={adminDoccss.tableHeader}>Nombre</Text>
            <Text style={adminDoccss.tableHeader}>Area</Text>
            <Text style={adminDoccss.tableHeader}>Editar</Text>
            <Text style={adminDoccss.tableHeader}>Eliminar</Text>
          </View>
          {/* <ScrollView > */}
          {doctors.map((p, index) => (
            <View style={adminDoccss.tableRow} key={p.id}>
              <Text style={adminDoccss.tableCell}>{index + 1}</Text>
              <Text style={adminDoccss.tableCell}>{p.username}</Text>
              <Text style={adminDoccss.tableCell}>{p.specialty}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalEditarVisible(true);
                  setSelectedDoctor(p);
                }}
                style={adminDoccss.tableCell}
              >
                <Image source={edit} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalEliminarVisible(true);
                  setSelectedDoctor(p.id);

                }}
                style={adminDoccss.tableCell}
              >
                <Image source={delit} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          ))}
          {/* </ScrollView> */}
        </View>


        <ModalUpdate
          visible={modalEditarVisible}
          onClose={() => setModalEditarVisible(false)}
          doctor={selectedDoctor}

        />
        
        <ModalDelete
          visible={modalEliminarVisible}
          onClose={() => setModalEliminarVisible(false)}
          doctor={selectedDoctor}
        />
        <ModalAdd
          visible={modalAnadirVisible}
          onClose={() => setModalAnadirVisible(false)}
        />
        {/* Botón para añadir */}
        <TouchableOpacity onPress={() => setModalAnadirVisible(true)}>
          <Image source={add} />
        </TouchableOpacity>
      </View>
      {!keyboardStatus && <FooterAdmin />}
    </KeyboardAvoidingView>
  );
};
