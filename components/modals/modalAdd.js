import React,{useState,useEffect} from 'react';
import { Modal, View, Text,TextInput,TouchableOpacity, Button } from 'react-native';
import { userM,register } from "../../assets/css/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalAdd = ({ visible, onClose }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [identification, setIdentification] = useState('');

    const postDoctor = async () => {
        try {
            const response = await fetch('http://192.168.65.103:4000/api/registerDoctor',{
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:name,
                        email:email,
                        password:password,
                        speciality:speciality,
                        identification:identification,
                    })
            });
            const data = await response.json();
            // console.log(data);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
            <View style={userM.centeredView}>
                    <View style={userM.modalView}>
                        <Text style={userM.close} onPress={onClose}>X</Text>
                        <View style={register.input}>
                    <Icon name="user" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
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
                <View style={register.input}>
                <Icon name="graduation-cap" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Especialidad (en mayusculas)"
                        value={speciality}
                        onChangeText={setSpeciality}
                    />
                </View>
                <View style={register.input}>
                <Icon name="certificate" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Cédula"
                        value={identification}
                        onChangeText={setIdentification}
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
                        <View style={userM.buttons}>
                            <TouchableOpacity style={userM.button} onPress={postDoctor}>
                                <Text style={userM.button}>Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={userM.button2} onPress={onClose}>
                                <Text style={userM.button2}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </Modal>
    );
};

export default ModalAdd;
