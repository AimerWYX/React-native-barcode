import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import tw from 'twrnc';
import {useAction} from './hook';
import React from 'react';
import {Button} from '@rneui/themed';
import {EditItemDetails} from './edit';

export const ItemDetails = ({route}: any) => {
  const {name} = route.params;

  const {
    tabAction,
    listData,
    isOpenEditDialog,
    selectedList,
    setTabAction,
    setIsOpenEditDialog,
    setSelectedList,
  } = useAction(name);

  return (
    <View style={tw`bg-white`}>
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
      <View style={tw`py-2 px-6 gap-3`}>
        {/* <View style={tw`h-10`} /> */}
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
              buttonStyle={tw`w-15 p-0 py-1.5 rounded-0.5 text-2 mr-1.5`}
              titleStyle={tw`text-3`}
            />
            <Button
              title="Submit"
              buttonStyle={tw`w-15 p-0 py-1.5 rounded-0.5 text-2 `}
              titleStyle={tw`text-3`}
            />
          </View>
        </View>
        <View style={tw`flex-row items-center gap-2 `}>
          <View style={tw`flex-row items-center relative flex-1 `}>
            <TextInput
              placeholder="Search"
              style={tw`border border-[#ccc] px-2 py-1 flex-1 `}
            />
            <Image
              style={tw`w-5 h-5 absolute right-2`}
              source={require('../../../../../assets/images/inputSearch.png')}
            />
          </View>
          <Button
            title="Cancel"
            buttonStyle={tw`w-15 p-0 py-1.5 rounded-0.5 text-2`}
            titleStyle={tw`text-3`}
          />
        </View>
      </View>
      <View>
        <View style={tw`bg-[#bdbaba] h-5`} />
        <ScrollView>
          {listData.map((item, index) => {
            return (
              <Pressable
                style={tw`${
                  selectedList.some(x => x === item.id) ? 'bg-[#42d040]' : ''
                }`}
                onPress={() => {
                  setSelectedList(pre => {
                    if (pre.includes(item.id)) {
                      return pre.filter(x => x !== item.id);
                    } else {
                      return [...pre, item.id];
                    }
                  });
                }}>
                <View
                  style={tw`pt-3 px-3 box-border border-b-[0.1] border-[#ccc]`}>
                  <View style={tw`flex-row mb-3`}>
                    <View style={tw`flex-row flex-1`}>
                      <Text style={tw`w-[10%] text-[3]`}>{index + 1}</Text>
                      <View style={tw`w-[80%]`}>
                        <View style={tw`flex-row items-center`}>
                          <Text style={tw`text-3 text-[#2988fe] mr-1`}>
                            {item.id}
                          </Text>
                          <Image
                            source={require('../../../../../assets/images/item.png')}
                            style={tw`w-3 h-3`}
                          />
                        </View>
                        <Text style={tw`text-3 my-2`}>{item.title}</Text>
                        <Text style={tw`text-3 text-[#f03753]`}>
                          {item.comment}
                        </Text>
                      </View>
                    </View>
                    <View style={tw`flex-1`}>
                      <View style={tw`flex-row justify-end mb-2`}>
                        <Text style={tw`text-3 mr-5`}>{item.SAP}</Text>
                        <View
                          style={tw`w-[20%] h-6 mr-5 mt-[-5] border border-[#ccc] flex-row justify-center items-center`}>
                          <Text style={tw`text-3`}>{item.QTY}</Text>
                        </View>
                        <Text style={tw`text-3`}>{item.Unit}</Text>
                      </View>
                      <View style={tw`flex-row justify-end`}>
                        <Button
                          title="CW"
                          buttonStyle={tw`w-12 p-0 py-0.5 rounded-0.5 text-2 mr-1.5`}
                          titleStyle={tw`text-3`}
                          onPress={() =>
                            setIsOpenEditDialog({open: true, listData: item})
                          }
                        />
                        <Button
                          title="CONFIRM"
                          buttonStyle={tw`w-18 p-0 py-0.5 rounded-0.5 text-2 mr-1.5 bg-[#40c83b]`}
                          titleStyle={tw`text-3`}
                        />
                        <Button
                          title="MORE"
                          buttonStyle={tw`w-12 p-0 py-0.5 rounded-0.5 text-2`}
                          titleStyle={tw`text-3`}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <EditItemDetails
        isOpenEditDialog={isOpenEditDialog}
        setIsOpenEditDialog={setIsOpenEditDialog}
      />
    </View>
  );
};
