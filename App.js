import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import NavbarUser from './components/navbar/NavbarUser';
import FooterDoc from './components/footer/FooterDoc';

import Login from './components/login/Login';
import Register from './components/register/Register';

import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Historial from './pages/users/history';
import Profile from './pages/users/profile';

import Doctor from './pages/doctors';
import Pacientes from './pages/doctors/pacientes';

import Administrator from './pages/administrator/index'
import AdminDoc from './pages/administrator/adminDoc';
import AdminUsers from './pages/administrator/adminUsers';

export default function App() {
  const [keyboardStatus, setKeyboardStatus] = React.useState(false);
  const Stack = createNativeStackNavigator();

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name='Table' component={Users} options={{ headerShown: false }} />
          <Stack.Screen name='Historial' component={Historial} options={{ headerShown: false }} />
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name='Doctor' component={Doctor} options={{ headerShown: false }}/>
          <Stack.Screen name='Pacientes' component={Pacientes} options={{ headerShown: false }}/>
          <Stack.Screen name='AdministradorHome' component={Administrator} options={{ headerShown: false }}/>
          <Stack.Screen name='AdministradorDoctores' component={AdminDoc} options={{ headerShown: false }}/>
          <Stack.Screen name='AdministradorUsuarios' component={AdminUsers} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* {!keyboardStatus && <FooterDoc />} */}
    </KeyboardAvoidingView>
  );
}
