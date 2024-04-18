import { View, Image } from "react-native";
import React from "react";
import {styles} from '../../assets/css/styles';
import logoUser from '../../assets/img/logoUser.png';

export default function Navbar() {
    return(
        <View style={styles.header}>
            <Image
          source={logoUser}
        />
        </View>
    );
}

// export default Navbar;