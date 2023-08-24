import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../Home';
import {Login} from '../Login';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
