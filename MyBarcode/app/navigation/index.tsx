import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThreeMajorCategories} from '../pages/three-major-categories';
import {NormalItem} from '../pages/three-major-categories/components/normal-item';
import {Login} from '../Login';
import {Home} from '../Home';
import {ItemDetails} from '../pages/three-major-categories/components/normal-item/item-details';
import {Button} from '@rneui/themed';
import {Image, Pressable, View} from 'react-native';
import tw from 'twrnc';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {backgroundColor: '#2987f9'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ThreeMajorCategories"
        component={ThreeMajorCategories}
      />
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator> */}
      <Stack.Screen
        name="NormalItem"
        component={NormalItem}
        // options={{title: ''}}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{
          title: '',
          headerRight: () => (
            <View style={tw`flex-row items-center gap-1`}>
              <Pressable>
                <Image
                  source={require('../assets/images/scan.png')}
                  style={tw`w-8 h-8`}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require('../assets/images/search.png')}
                  style={tw`w-8 h-8`}
                />
              </Pressable>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
