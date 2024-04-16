// Pantalla de inicio de sesión (Login)
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../assets/css/styles';
import loginImage from '../../assets/img/gif_login.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();


  // const handleLogin = async () => {
  //       navigation.navigate("Doctor");

  // };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.100.9:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }
      const data = await response.json();
      console.log(data);

  
      // Guardar el userId como string
      await AsyncStorage.setItem('userId', JSON.stringify(data));
  
      if (data.message === "administrator") {
        navigation.navigate("AdministradorHome");
      } if (data.message === "user") {
        navigation.navigate("Table");
      }
      if (data.message === "Doctor") {
        navigation.navigate("AdministradorDoctores");
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Error al iniciar sesión');
    }
  };
  

  return (
    <View style={login.inicio}>
      <View style={login.img}>
        <Image
          source={loginImage}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={login.inicio}>
        <Text style={login.texto}>Iniciar Sesión</Text>
        <View style={login.input}>
          <Icon name="envelope" size={20} color="#000" style={login.iconStyle} />
          <TextInput
            style={login.inputStyle}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={login.inputContainer}>
          <Icon name="lock" size={20} color="#000" style={login.iconStyle} />
          <TextInput
            style={login.inputStyle}
            placeholder="Contraseña"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={login.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin}>
          <Text style={login.button}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={login.p}>¿Aun no tienes cuenta? <Text style={login.span} onPress={() => navigation.navigate("Register")}>Registrarse</Text></Text>
      </View>
    </View>
  );
};

export default Login;
