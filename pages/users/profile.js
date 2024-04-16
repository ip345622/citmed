import { View, Image, Text, TextInput, TouchableOpacity, Alert, Platform } from "react-native";
import React, { useState } from "react";
import { profile } from '../../assets/css/styles';
import ModalSave from "../../components/modals/modalUser";
import Icon from 'react-native-vector-icons/FontAwesome';
import { userImg } from "../../assets";

export default Profile = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
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
                // value=""
                // onChangeText={}
                />
            </View>
            <View style={profile.input}>
                <Icon name="envelope" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Correo electrónico"
                // value=""
                // onChangeText={}
                />
            </View>
            <View style={profile.inputContainer}>
                <Icon name="lock" size={20} color="#000" style={profile.iconStyle} />
                <TextInput
                    style={profile.inputStyle}
                    placeholder="Contraseña"
                    secureTextEntry={secureTextEntry}
                // value=""
                // onChangeText={}
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
                // value=""
                // onChangeText={}
                />
                <TouchableOpacity style={profile.eyeIcon} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={profile.button} onPress={() => Alert.alert('Cambios guardados', 'Los cambios se han guardado correctamente.')}>
                Guardar
            </Text>
        </View>
    );
}
