import {CheckBox} from '@rneui/themed';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {useAction} from './hook';
import {DialogType} from './dialog';
import Icon from 'react-native-vector-icons/FontAwesome';

export const NormalItem = ({navigation}: any) => {
  const {normalItem, openDialogType, setNormalItem, setOpenDialogType} =
    useAction();

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
          {[
            {name: 'View', type: 'view'},
            {name: 'Sign in', type: 'signIn'},
            {name: 'Sign out', type: 'signOut'},
          ].map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={tw`rounded-2`}
                onPress={() =>
                  setOpenDialogType(preValue => ({
                    ...preValue,
                    [item.type]: true,
                  }))
                }>
                <View style={tw`rounded-2 mx-0.8`}>
                  <Text
                    style={tw`${
                      index === 1 ? 'bg-[#49c044]' : 'bg-[#2887fb]'
                    } text-white py-1 px-3 text-2.5 font-medium`}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <ScrollView style={tw`p-2`}>
        <View style={tw`flex-row items-center`}>
          <CheckBox
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={normalItem.every(x => x.check)}
            onPress={() => {
              setNormalItem(pre =>
                pre.map(x => ({...x, check: !normalItem.every(x => x.check)})),
              );
            }}
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
                  checked={item.check}
                  onPress={() => {
                    setNormalItem(pre => {
                      const updateData = [...pre];

                      updateData[index].check = !updateData[index].check;

                      return updateData;
                    });
                  }}
                />
                <View style={tw`flex-1 border border-[#eee] rounded-1`}>
                  <View
                    style={tw`flex-row border-b border-[#ddd] pt-3 px-3 pb-1`}>
                    <Text style={tw`text-3`}>{index + 1}</Text>
                    <View style={tw`ml-5`}>
                      <Text style={tw`text-3`}>{item.name}</Text>
                      <View style={tw`flex-row items-center my-1`}>
                        <Icon name="stepforward" color="#eabd8a" size={15} />
                        <Text
                          style={tw`ml-2 text-[#a9a9a9] text-2 font-medium`}>
                          Start : {item.startDate}
                        </Text>
                      </View>
                      <View style={tw`flex-row items-center`}>
                        <Icon
                          name="ClockCircleOutlined"
                          color="#eabd8a"
                          size={15}
                        />
                        <Text
                          style={tw`ml-2 text-[#a9a9a9] text-2 font-medium`}>
                          Finish : {item.endDate}
                        </Text>
                      </View>
                    </View>
                    <Text style={tw`text-3 ml-auto mr-0`}>{item.count}</Text>
                  </View>
                  <View>
                    <Text
                      style={tw`text-center`}
                      onPress={() =>
                        navigation.navigate('ItemDetails', {name: item.name})
                      }>
                      icon
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <DialogType
        title="Select Preference"
        isOpen={openDialogType.view}
        setOpenDialogType={setOpenDialogType}>
        {['Option 1', 'Option 2', 'Option 3'].map((item, index) => (
          <CheckBox
            key={index}
            title={item}
            containerStyle={tw`py-1 pl-3`}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={false}
          />
        ))}
      </DialogType>
      <DialogType
        title="Confirm"
        isOpen={openDialogType.signIn}
        setOpenDialogType={setOpenDialogType}>
        <Text style={tw`text-center pt-5 pb-8`}>Sign In</Text>
      </DialogType>
      <DialogType
        title="Confirm"
        isOpen={openDialogType.signOut}
        setOpenDialogType={setOpenDialogType}>
        <Text style={tw`text-center pt-5 pb-8`}>Are you sure "Sign Out"?</Text>
      </DialogType>
    </View>
  );
};
