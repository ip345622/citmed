import { View, Image, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { register } from '../../assets/css/styles';

export default Register = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const navigation = useNavigation();
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [verifyPassword,setVerifyPassword] = useState('');

    const createUser = async() => {
        if(password === verifyPassword) {
            const response = await fetch('http://192.168.65.103:4000/api/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                rol: 'user'
            })
        });
        if (!response.ok) {
            // El registro fue exitoso, redirige al usuario a la pantalla de inicio de sesión
            navigation.navigate("Table");
        }else{
            console.log(response.json());
        }
        }else{
            Alert.alert("Error","Puede verificar su contraseña de nuevo");
        }
    }

    return (
        <View style={register.inicio}>
            <View style={register.inicio}>
                <Text style={register.texto}>Registrarse</Text>
                <View style={register.input}>
                    <Icon name="user" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Nombre"
                    value={username}
                    onChangeText={setUserName}
                    />
                </View>
                <View style={register.input}>
                    <Icon name="envelope" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>
                <View style={register.inputContainer}>
                    <Icon name="lock" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Contraseña"
                        secureTextEntry={secureTextEntry}
                    value={password}
                    onChangeText={setPassword}
                    />
                    <TouchableOpacity style={register.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={register.inputContainer}>
                    <Icon name="lock" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Confirmar contraseña"
                        secureTextEntry={secureTextEntry}
                    value={verifyPassword}
                    onChangeText={setVerifyPassword}
                    />
                    <TouchableOpacity style={register.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <Text style={register.button} onPress={createUser}>
                    Registrarse
                </Text>
                <Text style={register.p}>¿Ya tienes cuenta?        <Text style={register.span}  onPress={() => navigation.navigate("Login")}>Iniciar sesión</Text></Text>
            </View>
        </View>
    );
}