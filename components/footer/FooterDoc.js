import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

import { footernav } from '../../assets/css/styles';
import { info, userN, homeN } from '../../assets';

export default FooterDoc = () => {
  const navigation = useNavigation();
    return (
        <View style={footernav.inicio}>
            <TouchableOpacity onPress={() => navigation.navigate("Pacientes")}>
                <Image source={info} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Doctor")}>
                <Image source={homeN} />
            </TouchableOpacity>
        </View>
    );
}