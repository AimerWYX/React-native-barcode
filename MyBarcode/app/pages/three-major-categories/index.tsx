import React from 'react';
import tw from 'twrnc';
import {Text, TouchableOpacity, View} from 'react-native';

export const ThreeMajorCategories = ({navigation}) => {
  return (
    <View style={tw`p-3`}>
      <View style={tw`flex-row items-center bg-white rounded-1 shadow`}>
        <View style={tw`mr-12 py-3 px-4`}>
          <Text style={tw`text-3 text-[#2c2c2c] mb-2`}>Warehouse</Text>
          <Text style={tw`font-semibold text-3.5 text-[#2c2c2c]`}>1200</Text>
        </View>
        <View>
          <Text style={tw`text-[#2c2c2c] text-3 mb-2`}>File Date</Text>
          <Text style={tw`font-semibold text-[#2c2c2c] text-3.5`}>
            09/30/2023 Saturday
          </Text>
        </View>
      </View>
      {[
        {itemName: 'Normal Item', component: 'NormalItem'},
        {itemName: 'Fresh Item', component: ''},
        {itemName: 'Return Item', component: ''},
      ].map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.component)}
            style={tw`mt-2 items-center rounded-1 ${
              index === 0 ? 'bg-[#2988fe]' : 'bg-[#f39c16]'
            }`}>
            <View style={tw`h-20 justify-center`}>
              <Text style={tw`text-white text-5 font-600`}>
                {item.itemName}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
