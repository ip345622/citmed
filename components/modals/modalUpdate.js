import React,{useState} from 'react';
import { Modal, View, Text,TextInput,TouchableOpacity, Button } from 'react-native';
import { userM,register } from "../../assets/css/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalUpdate = ({ visible, onClose }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);


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
                <View style={register.input}>
                <Icon name="graduation-cap" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Especialidad"
                    // value=""
                    // onChangeText={}
                    />
                </View>
                <View style={register.input}>
                <Icon name="certificate" size={20} color="#000" style={register.iconStyle} />
                    <TextInput
                        style={register.inputStyle}
                        placeholder="Cédula"
                    // value=""
                    // onChangeText={}
                    />
                </View>
                        <View style={userM.buttons}>
                            <TouchableOpacity style={userM.button} onPress={()=>console.log('guardando')}>
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

export default ModalUpdate;
