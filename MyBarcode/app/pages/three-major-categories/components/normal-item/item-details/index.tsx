import {ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native';
import tw from 'twrnc';
import {useAction} from './hook';
import React from 'react';
import {Button} from '@rneui/themed';

export const ItemDetails = () => {
  const {tabAction, listData, setTabAction} = useAction();

  return (
    <View>
      <View style={tw`flex-row justify-center border-b-[0.2] border-[#ccc]`}>
        {['CHICKEN', '蔬菜--水果豆制品粉蛋类'].map((item, index) => {
          return (
            <TouchableWithoutFeedback onPress={() => setTabAction(item)}>
              <View key={index} style={tw`flex-row mx-3 h-8 items-center`}>
                <View
                  style={tw`${
                    tabAction === item ? 'border-b-[0.5] border-[#5086c3]' : ''
                  } h-full flex-row items-center`}>
                  <Text
                    style={tw`${
                      tabAction === item ? 'text-[#5086c3]' : ''
                    } font-semibold text-[3]`}>
                    {item}
                  </Text>
                </View>
                <Text
                  style={tw`bg-[#f9535a] text-white w-4 h-4 text-center rounded-[2] overflow-hidden text-3 mt-[-8] ml-1`}>
                  5
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <View style={tw`py-2 px-6`}>
        <View style={tw`h-10`}></View>
        <View style={tw`flex-row justify-between`}>
          <View style={tw`flex-row`}>
            {[
              {title: 'ETD FORM', value: '2022-3-11'},
              {title: 'PLANT', value: '1200'},
              {title: 'ITEMS', value: '0/5'},
            ].map((item, index) => {
              return (
                <View style={tw`mr-3`} key={index}>
                  <Text style={tw`text-[#707070] font-semibold mb-2 text-2.5`}>
                    {item.title}
                  </Text>
                  <Text
                    style={tw`text-3 ${index === 2 ? 'text-[#4384c7]' : ''}`}>
                    {item.value}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={tw`flex-row items-end`}>
            <Button
              title="Start"
              buttonStyle={tw`w-15 p-0 py-1 rounded-0.5 text-2 mr-1.5`}
              titleStyle={tw`text-3`}
            />
            <Button
              title="Submit"
              buttonStyle={tw`w-15 p-0 py-1 rounded-0.5 text-2 `}
              titleStyle={tw`text-3`}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={tw`bg-[#bdbaba] h-5`}></View>
        <ScrollView>
          {listData.map((item, index) => {
            return (
              <View style={tw`py-1 box-border`}>
                <View style={tw`flex-row mb-3`}>
                  <View style={tw`flex-row py-2`}>
                    <Text style={tw`w-[20%] text-center text-[3]`}>
                      {index + 1}
                    </Text>
                    <View style={tw`w-[50%] break-words`}>
                      <Text style={tw`text-3 text-[#2988fe] mb-1`}>
                        {item.id}
                      </Text>
                      <Text style={tw`text-3`}>{item.title}</Text>
                      <Text style={tw`text-3`}>{item.comment}</Text>
                    </View>
                  </View>
                  <Text style={tw`text-3 mr-5`}>{item.SAP}</Text>
                  <View
                    style={tw`w-[8%] h-6 mr-5 border border-[#ccc] flex-row justify-center items-center`}>
                    <Text style={tw`text-3`}>{item.QTY}</Text>
                  </View>
                  <Text style={tw`text-3`}>{item.Unit}</Text>
                </View>
                <View style={tw`flex-row justify-end`}>
                  <Button
                    title="CW"
                    buttonStyle={tw`w-12 p-0 py-0.5 rounded-0.5 text-2 mr-1.5`}
                    titleStyle={tw`text-3`}
                  />
                  <Button
                    title="CONFIRM"
                    buttonStyle={tw`w-18 p-0 py-0.5 rounded-0.5 text-2 mr-1.5 bg-[#40c83b]`}
                    titleStyle={tw`text-3`}
                  />
                  <Button
                    title="MORE"
                    buttonStyle={tw`w-12 p-0 py-0.5 rounded-0.5 text-2 mr-1.5`}
                    titleStyle={tw`text-3`}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};