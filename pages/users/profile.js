import { View, Image, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profile } from '../../assets/css/styles';
import ModalSave from "../../components/modals/modalUser";
import Icon from 'react-native-vector-icons/FontAwesome';
import { userImg } from "../../assets";
import NavbarUser from "../../components/navbar/NavbarUser";
import FooterNav from '../../components/footer/FooterNav';
import useInterval from "../../components/interval/interval";

export default Profile = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    // update the user
    const [password, setPassword] = useState(null);
    const [verifyPassword, setVerifyPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [getUsers, setGetUsers] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const result = await AsyncStorage.getItem('userId');
            if (result) {
                const parsedResult = JSON.parse(result);
                const userId = parsedResult.data;
                setUserId(userId);
                // console.log('userId:', userId);
            }
        };
        fetchUserId();
        
    }, []);
    useInterval(() => {
        getUser(userId);
    },2000)
    useEffect(() => {
        // getUser(userId);
        setNombrePaciente(getUsers[0]?.username);
        setEmail(getUsers[0]?.email);
    },[])
    console.log(nombrePaciente);


    const getUser = async(userId) => {
        const response = await fetch(`http://192.168.65.103:4000/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await response.json();
        const filteredUsers = user.filter(u => u._id === userId);
        setGetUsers(filteredUsers);
        console.log(filteredUsers.username);
    };

    const createAppointment = async () => {
        const response = await fetch(`http://192.168.65.103:4000/api/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: nombrePaciente,
                // password: password,
                email: email,
            }),
        });

        if (response.ok) {
            // console.log(' Se actualizo correctamente');
            Alert.alert('Cambios guardados', 'Los cambios se han guardado correctamente!')

            
        }

        const data = await response.json();
        // console.log(data);
    };
 
   

    return (
        <KeyboardAvoidingView style={profile.inicio} behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <NavbarUser />
        <View style={profile.inicio}>
            <Image
                source={userImg}
                style={profile.img}
            />
            <Text style={profile.h1}>Perfil</Text>
            <View style={profile.input}>
                <Icon name="user" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Nombre"
                value={nombrePaciente}
                onChangeText={setNombrePaciente}
                />
            </View>
            <View style={profile.input}>
                <Icon name="envelope" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                />
            </View>
            <View style={profile.inputContainer}>
                <Icon name="lock" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Contraseña"
                    secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={setPassword}
                />
                <TouchableOpacity style={profile.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={profile.inputContainer}>
                <Icon name="lock" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Confirmar contraseña"
                    secureTextEntry={secureTextEntry}
                value={verifyPassword}
                onChangeText={setVerifyPassword}
                />
                <TouchableOpacity style={profile.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={profile.button} onPress={createAppointment}>
                Guardar
            </Text>
        </View>
        {!keyboardStatus && <FooterNav />}

        </KeyboardAvoidingView>
    );
}
