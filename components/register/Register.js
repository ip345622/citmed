import { View, Image, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { register } from '../../assets/css/styles';

export default Register = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const navigation = useNavigation();

    return (
        <View style={register.inicio}>
            <View style={register.inicio}>
                <Text style={register.texto}>Registrarse</Text>
                <View style={register.input}>
                    <Icon name="user" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Nombre"
                    // value=""
                    // onChangeText={}
                    />
                </View>
                <View style={register.input}>
                    <Icon name="envelope" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Correo electrónico"
                    // value=""
                    // onChangeText={}
                    />
                </View>
                <View style={register.inputContainer}>
                    <Icon name="lock" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Contraseña"
                        secureTextEntry={secureTextEntry}
                    // value=""
                    // onChangeText={}
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
                    // value=""
                    // onChangeText={}
                    />
                    <TouchableOpacity style={register.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <Text style={register.button} onPress={() => console.log('click', +1)}>
                    Registrarse
                </Text>
                <Text style={register.p}>¿Ya tienes cuenta?        <Text style={register.span}  onPress={() => navigation.navigate("Login")}>Iniciar sesión</Text></Text>
            </View>
        </View>
    );
}