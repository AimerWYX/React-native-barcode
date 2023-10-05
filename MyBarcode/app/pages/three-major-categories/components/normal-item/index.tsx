import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

export const NormalItem = () => {
  return (
    <>
      <View style={tw`flex-row items-center bg-white p-3`}>
        <View>
          <Text style={tw`text-3 text-[#2c2c2c] mb-2`}>Warehouse</Text>
          <Text style={tw`font-semibold text-3.5 text-[#2c2c2c]`}>1200</Text>
        </View>
        <View>
          <Text style={tw`text-[#2c2c2c] text-3 mb-2 mx-2`}>File Date</Text>
          <Text style={tw`font-semibold text-[#2c2c2c] text-3.5`}>
            5/10/2023 Thursday
          </Text>
        </View>
        <View style={tw`flex-row self-end`}>
          {[{name: 'View'}, {name: 'Sign in'}, {name: 'Sign out'}].map(
            (item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <View style={tw`rounded-1`}>
                    <Text
                      style={tw` ${
                        index === 1 ? 'bg-[#49c044]' : 'bg-[#2887fb]'
                      } text-white py-1 px-3`}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          )}
        </View>
      </View>
    </>
  );
};
