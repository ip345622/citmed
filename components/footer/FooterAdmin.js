import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import React from "react";
import { footernav } from '../../assets/css/styles';
import { docN, userN, homeN } from '../../assets';

export default FooterAdmin = () => {
  const navigation = useNavigation();

    return (
        <View style={footernav.inicio}>
            <TouchableOpacity onPress={() => navigation.navigate("AdministradorDoctores")}>
                <Image source={docN} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AdministradorHome")}>
                <Image source={homeN} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AdministradorUsuarios")}>
                <Image source={userN} />
            </TouchableOpacity>
        </View>
    );
}