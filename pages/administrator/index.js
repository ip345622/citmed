import { View, Image, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState,useEffect } from "react";
import { admin } from '../../assets/css/styles';
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterAdmin from "../../components/footer/FooterAdmin";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from "react-native-chart-kit";




export default Adminstrator = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [user,setUser] = useState('');
  const [cantidadUsers,setCantidadUser] = useState('');
  const [cantidadDoctors, setCantidadDoctors] = useState('');
  const [userId, setUserId] = useState(null);
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
    getCantidadUsers();
    getDoctors();
    fetchUserId();
}, []);
const getCantidadUsers = async() => {
  const response = await fetch('http://192.168.65.103:4000/api/users', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const users = await response.json();
      const usersFilter = users.filter(user => user.rol == 'user');
          const cantidadUs = usersFilter.length;
          console.log("use",cantidadUs);
          setCantidadUser(cantidadUs);
// console.log('Cantidad de citas:', cantidadCitas);
// return cantidadCitas;
}
const getDoctors = async() => {
  const response = await fetch('http://192.168.65.103:4000/api/Doctors', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const doc = await response.json();
      
      // const usersFilter = users.filter(user => user.rol == 'user');
          const cantidadDoc = doc.length;
          console.log(cantidadDoc);
          setCantidadDoctors(cantidadDoc);
// console.log('Cantidad de citas:', cantidadCitas);
// return cantidadCitas;
}
const data = [
  {
    name: " Doctores",
    count: 5, // Cambia este valor según las consultas pendientes
    color: "#FF6347", // Color para las consultas pendientes
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Pacientes",
    count: cantidadUsers, // Cambia este valor según las consultas terminadas
    color: "#1E90FF", // Color para las consultas terminadas
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
useEffect(() => {
  const getUser = async (userId) => {
    const response = await fetch(`http://192.168.65.103:4000/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener las citas');
    }
    const user1 = await response.json();
    const userUnique = user1.filter(user => user._id === userId);
    // console.log(userUnique);
    setUser(userUnique);
  }
  if (userId) {
    console.log(user);
    // getUser(userId);
  }
},[userId])

  return(
    <KeyboardAvoidingView style={admin.inicio} behavior={Platform.OS === 'ios' ? 'padding' : null}>

    <View style={admin.inicio}>
          <NavbarUser />
            <View>
            <Text style={admin.h1}>Bienvenido</Text>
            <Text style={admin.p}>{user.length > 0 ? user[0].username : ''}</Text>

            </View>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          {/* Grafico */}
          <Text style={admin.h1}>Gráfico de Usuarios</Text>
          <PieChart
            data={data}
            width={350}
            height={220}
            chartConfig={{
                backgroundColor: "#f0f0f0",
                backgroundGradientFrom: "#f0f0f0",
                backgroundGradientTo: "#f0f0f0",
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute // Indica si los valores son absolutos o proporcionales
            />
        </View>
            </View>
            {!keyboardStatus && <FooterAdmin />}

        </KeyboardAvoidingView>
    );
}