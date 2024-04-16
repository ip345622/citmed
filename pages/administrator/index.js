import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { admin } from '../../assets/css/styles';

import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: " Canceladas",
    count: 20, // Cambia este valor según las consultas pendientes
    color: "#FF6347", // Color para las consultas pendientes
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: " Pendientes",
    count: 45, // Cambia este valor según las consultas terminadas
    color: "#1E90FF", // Color para las consultas terminadas
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: " Terminadas",
    count: 15, // Cambia este valor según las consultas canceladas
    color: "#32CD32", // Color para las consultas canceladas
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

export default Administrator = () => {
    return(
        <View style={admin.inicio}>
            <View>
            <Text style={admin.h1}>Bienvenido</Text>
            <Text style={admin.p}>Israel</Text>
            </View>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          {/* Grafico */}
          <Text style={admin.h1}>Gráfico de Consultas</Text>
          <PieChart
            data={data}
            width={350}
            height={220}
            chartConfig={{
                backgroundColor: "#f0f0f0",
                backgroundGradientFrom: "#f0f0f0",
                backgroundGradientTo: "#f0f0f0",
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute // Indica si los valores son absolutos o proporcionales
            />
        </View>
            </View>
    );
}