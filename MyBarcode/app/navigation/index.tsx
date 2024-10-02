import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThreeMajorCategories} from '../pages/three-major-categories';
import {NormalItem} from '../pages/three-major-categories/components/normal-item';
import {Login} from '../Login';
import {Home} from '../Home';
import {ItemDetails} from '../pages/three-major-categories/components/normal-item/item-details';

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
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator> */}
      <Stack.Screen name="NormalItem" component={NormalItem} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default Navigator;
