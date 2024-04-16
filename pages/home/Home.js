import { View, Image, Text, Button } from "react-native";
import React from "react";
import {pageHome} from '../../assets/css/styles';
import home from '../../assets/img/home.png';
import { useNavigation } from '@react-navigation/native';


export default Home = () => {
    const navigation = useNavigation();

    return (
        <View style={pageHome.inicio}>
            <Image
                source={home}
            />
            <Text style={pageHome.h1} >Organiza tu atención médica con facilidad y eficiencia</Text>
            <Text style={pageHome.p} >Realiza tu cita de manera rápida y sencilla,
                asegurando que recibas la atención que necesitas sin
                complicaciones, para recibir atención especializada y
                cuidado preventivo, abordando tus preocupaciones de
                salud de manera oportuna y efectiva.</Text>
                <Text style={pageHome.button} onPress={() => navigation.navigate("Login")}>Iniciar</Text>
        </View>
    );
}