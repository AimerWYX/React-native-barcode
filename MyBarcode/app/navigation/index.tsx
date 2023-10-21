import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThreeMajorCategories} from '../pages/three-major-categories';
import {NormalItem} from '../pages/three-major-categories/components/normal-item';
import {Login} from '../Login';
import {Home} from '../Home';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ThreeMajorCategories"
        component={ThreeMajorCategories}
      />
      <Stack.Screen name="NormalItem" component={NormalItem} />
    </Stack.Navigator>
  );
};

export default Navigator;
