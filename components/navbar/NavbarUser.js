import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { navbarUser } from '../../assets/css/styles';
import logoUser from '../../assets/img/logoUser.png';
import exit from '../../assets/img/exit.png';

export default function NavbarUser() {
  const navigation = useNavigation();
    return (
        <View style={navbarUser.header}>
            <Image source={logoUser} />
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={exit} />
            </TouchableOpacity>
        </View>
    );
}
