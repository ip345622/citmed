import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import React from "react";
import { footernav } from '../../assets/css/styles';
import { info, userN, homeN } from '../../assets';

export default FooterNav = () => {
  const navigation = useNavigation();

    return (
        <View style={footernav.inicio}>
            <TouchableOpacity onPress={() => navigation.navigate("Historial")}>
                <Image source={info} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Table")}>
                <Image source={homeN} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image source={userN} />
            </TouchableOpacity>
        </View>
    );
}