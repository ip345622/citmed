import React, { useState, useEffect } from "react";
import { userM, register } from "../../assets/css/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalUpdate = ({ visible, onClose, doctor }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [identification, setIdentification] = useState('');

  useEffect(() => {
    setName(doctor?.username);
    setEmail(doctor?.email);
    setSpeciality(doctor?.specialty);
    setIdentification(doctor?.identification);
  }, [doctor]);

  const putDoctor = async () => {
    try {
      const response = await fetch(`http://192.168.65.103:4000/api/doctor/${doctor.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          specialty: speciality,
          identification: identification
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el doctor");
      }

      Alert.alert("Actualizado", "Doctor actualizado correctamente");
      onClose();
    } catch (error) {
      console.error(error.message);
    //   console.log(response.json());
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={userM.centeredView}>
        <View style={userM.modalView}>
          <Text style={userM.close} onPress={onClose}>
            X
          </Text>
          <View style={register.input}>
            <Icon
              name="user"
              size={20}
              color="#000"
              style={register.iconStyle}
            />
            <TextInput
              style={register.inputStyle}
              placeholder="Nombre"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={register.input}>
            <Icon
              name="envelope"
              size={20}
              color="#000"
              style={register.iconStyle}
            />
            <TextInput
              style={register.inputStyle}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={register.input}>
            <Icon
              name="graduation-cap"
              size={20}
              color="#000"
              style={register.iconStyle}
            />
            <TextInput
              style={register.inputStyle}
              placeholder="Especialidad (en mayusculas)"
              value={speciality}
              onChangeText={setSpeciality}
            />
          </View>
          <View style={register.input}>
            <Icon
              name="certificate"
              size={20}
              color="#000"
              style={register.iconStyle}
            />
            <TextInput
              style={register.inputStyle}
              placeholder="Cédula"
              value={identification}
              onChangeText={setIdentification}
            />
          </View>
          <View style={userM.buttons}>
            <TouchableOpacity
              style={userM.button}
              onPress={putDoctor}
            >
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
