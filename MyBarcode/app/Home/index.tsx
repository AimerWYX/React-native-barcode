import {Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useAction} from './hook';

export const Home = () => {
  const {linkCardList} = useAction();

  return (
    <View>
      {linkCardList.map(item => {
        return item.linkCardList.map(childrenItem => {
          return (
            <View>
              <Text style={tw`mb-6 text-center font-medium`}>
                {item.moduleTitle}
              </Text>
              <View style={tw`justify-center`}>
                <View
                  style={tw.style(
                    'h-18 w-18 justify-center',
                    'bg-' + childrenItem.background,
                  )}>
                  <Text>{childrenItem.icon}</Text>
                  <Text
                    style={tw`text-2.5 text-center text-[#fff] font-medium`}>
                    {childrenItem.title}
                  </Text>
                </View>
              </View>
            </View>
          );
        });
      })}
    </View>
  );
};
