import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { pacientes } from "../../assets/css/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doctor, usersDoc } from "../../assets";
import FooterDoc from "../../components/footer/FooterDoc";
import NavbarUser from "../../components/navbar/NavbarUser";

export default Pacientes = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [userId, setUserId] = useState(null);
  const [citasHoy, setCitasHoy] = useState([]);


  useEffect(() => {
    const fetchUserId = async () => {
      const result = await AsyncStorage.getItem("userId");
      if (result) {
        const parsedResult = JSON.parse(result);
        const userId = parsedResult.data;
        setUserId(userId);
        console.log('userId:', userId);

        const user = await getUsers(userId);
        if (user) {
          setLoginUser((prevState) => ({
            ...prevState,
            username: user.username,
          }));
        }
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const getCitas = async (userId) => {
      const now = new Date();
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const response = await fetch(
        "http://192.168.65.103:4000/api/appointments",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error al obtener las citas");
      }
      const citas = await response.json();
      // console.log('dfd',userId);
      const citasTotales = citas.filter(cita =>
        cita.id_doctor === userId && !cita.userName.includes("Usuario no encontrado") && !cita.userName.includes("administrator"));
    setCitasHoy(citasTotales);
    console.log(citasTotales);
    
    };
    getCitas(userId);
  }, [userId]);


  return (
    <KeyboardAvoidingView
      style={pacientes.inicio}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <NavbarUser />
      <View style={pacientes.inicio}>
        <Image source={usersDoc} />
        <Text style={pacientes.h1}>Total de pacientes por hoy</Text>
        <View style={pacientes.table}>
          <View style={pacientes.tableRow}>
            <Text style={pacientes.tableHeader}>N°</Text>
            <Text style={pacientes.tableHeader}>Nombre</Text>
          </View>
          {/* <ScrollView > */}
          {citasHoy.map((p,index) => (
            <View style={pacientes.tableRow} >
              <Text style={pacientes.tableCell}>{index + 1}</Text>
              <Text style={pacientes.tableCell}>{p.userName}</Text>
            </View>
          ))}
          {/* </ScrollView> */}
        </View>
      </View>
      {!keyboardStatus && <FooterDoc />}
    </KeyboardAvoidingView>
  );
};
