import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useAction} from './hook';

export const Home = ({navigation}) => {
  const {linkCardList} = useAction();

  return (
    <View style={tw`px-2`}>
      {linkCardList.map((item, index) => {
        return (
          <View key={index} style={tw`py-5`}>
            <Text style={tw`mb-6 text-center font-medium`}>
              {item.moduleTitle}
            </Text>
            <View style={tw`flex-row flex-wrap justify-between`}>
              {item.linkCardList.map((childrenItem, childrenIndex) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(childrenItem.link)}
                    key={childrenIndex}
                    activeOpacity={0.5}
                    style={tw.style(
                      'w-19.5% h-18 justify-center rounded-0.5 px-1 mb-0.5',
                      'bg-' + childrenItem.background,
                    )}>
                    <View>
                      {/* <Text>{childrenItem.icon}</Text> */}
                      <Text
                        style={tw`text-2 text-center text-[#fff] font-medium`}>
                        {childrenItem.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};
