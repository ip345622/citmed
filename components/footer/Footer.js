import { View, Text } from "react-native";
import React from "react";
import {footer} from '../../assets/css/styles';

export default function Footer() {
    return(
        <View style={footer.header}>
            <Text style={footer.p}>Todos los derechos reservados @2024</Text>
        </View>
    );
}
