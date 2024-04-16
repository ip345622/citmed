import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { footernav } from '../../assets/css/styles';
import { info, userN, homeN } from '../../assets';

export default FooterDoc = () => {
    return (
        <View style={footernav.inicio}>
            <TouchableOpacity onPress={() => console.log('Historial')}>
                <Image source={info} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Inicio')}>
                <Image source={homeN} />
            </TouchableOpacity>
        </View>
    );
}