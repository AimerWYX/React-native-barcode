import {CheckBox, Dialog, Icon} from '@rneui/base';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {useAction} from './hook';

export const NormalItem = () => {
  const {normalItem, isSignIn, setIsSignIn} = useAction();

  return (
    <View style={tw`bg-white flex-1`}>
      <View
        style={tw`flex-row items-center justify-between bg-white p-3 shadow rounded-br-3 rounded-bl-3`}>
        <View style={tw`flex-row justify-between`}>
          <View style={tw`mr-3`}>
            <Text style={tw`text-2.5 text-[#2c2c2c] mb-2`}>Warehouse</Text>
            <Text style={tw`font-medium text-2.5 text-[#000]`}>1200</Text>
          </View>
          <View>
            <Text style={tw`text-[#2c2c2c] text-2.5 mb-2`}>File Date</Text>
            <Text style={tw`font-medium text-[#000] text-2.5`}>
              5/10/2023 Thursday
            </Text>
          </View>
        </View>
        <View style={tw`flex-row self-end`}>
          {[{name: 'View'}, {name: 'Sign in'}, {name: 'Sign out'}].map(
            (item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={tw`rounded-2`}
                  onPress={() =>
                    setIsSignIn(preValue => ({...preValue, signIn: true}))
                  }>
                  <View style={tw`rounded-2 mx-0.8`}>
                    <Text
                      style={tw` ${
                        index === 1 ? 'bg-[#49c044]' : 'bg-[#2887fb]'
                      } text-white py-1 px-3 text-2.5 font-medium`}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          )}
        </View>
      </View>
      <ScrollView style={tw`p-2`}>
        <View style={tw`flex-row items-center`}>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={true}
            size={18}
          />
          <Text style={tw`text-3`}>Select All</Text>
        </View>
        <View>
          {normalItem.map((item, index) => {
            return (
              <View style={tw`flex-row mb-0.5`}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  size={18}
                />
                <View
                  style={tw`flex-row flex-1 border border-[#eee] pt-3 px-3 pb-1`}>
                  <Text style={tw`text-3`}>{index + 1}</Text>
                  <View style={tw`ml-5`}>
                    <Text style={tw`text-3`}>{item.name}</Text>
                    <View style={tw`flex-row items-center my-1`}>
                      <Icon
                        name="ClockCircleOutlined"
                        color="#6ac6a1"
                        size={15}
                      />
                      <Text style={tw`ml-2 text-[#a9a9a9] text-2 font-medium`}>
                        Start : {item.startDate}
                      </Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                      <Icon
                        name="ClockCircleOutlined"
                        color="#eabd8a"
                        size={15}
                      />
                      <Text style={tw`ml-2 text-[#a9a9a9] text-2 font-medium`}>
                        Finish : {item.endDate}
                      </Text>
                    </View>
                  </View>
                  <Text style={tw`text-3 ml-auto mr-0`}>{item.count}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Dialog
        isVisible={isSignIn.signIn}
        onBackdropPress={() => {}}
        style={tw`bg-white`}>
        <Dialog.Title title="Select Preference" />
        {['Option 1', 'Option 2', 'Option 3'].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{backgroundColor: 'white', borderWidth: 0}}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={false}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() =>
              setIsSignIn(preValue => ({...preValue, signIn: false}))
            }
          />
          <Dialog.Button
            title="CANCEL"
            onPress={() =>
              setIsSignIn(preValue => ({...preValue, signIn: false}))
            }
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};
