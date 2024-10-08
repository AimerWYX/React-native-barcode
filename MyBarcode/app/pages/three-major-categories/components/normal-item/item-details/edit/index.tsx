import {CheckBox, Dialog, Text} from '@rneui/themed';
import {editItemDetailsProps} from './props';
import tw from 'twrnc';
import {Image, TextInput, View} from 'react-native';

export const EditItemDetails = (props: editItemDetailsProps) => {
  const {isOpenEditDialog, setIsOpenEditDialog} = props;

  return (
    <Dialog
      overlayStyle={tw`bg-white p-0`}
      isVisible={isOpenEditDialog.open}
      onBackdropPress={() =>
        setIsOpenEditDialog(pre => ({...pre, open: false}))
      }>
      <Dialog.Title
        title={isOpenEditDialog.listData.id}
        titleStyle={tw`px-5 py-3 bg-[#1790ff] text-white text-4`}
      />
      <View style={tw`px-5`}>
        <Text style={tw`mb-3 font-bold`}>
          {isOpenEditDialog.listData.title}
        </Text>
        {[
          {title: 'SAP CHANGE QTY/WM UINT :', placeholder: '12 CS'},
          {title: 'Prepare QTY :', placeholder: '0.0'},
          {title: 'Pick Up :', placeholder: '0.0'},
          {title: 'Difference :', placeholder: '0.0'},
        ].map((item, index) => {
          return (
            <View style={tw`flex-row mb-3`} key={index}>
              <View style={tw`border border-[#ccc] border-r-0 py-1 px-2 w-max`}>
                <Text style={tw`text-3`}>{item.title}</Text>
              </View>
              <TextInput
                keyboardType="number-pad"
                inputMode="numeric"
                style={tw`border border-[#ccc] border-l-0 py-1 px-2 text-right flex-1`}
                placeholder={item.placeholder}
              />
            </View>
          );
        })}
        <View style={tw`gap-3 py-3 border border-[#ddd] border-l-0 border-r-0`}>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`w-[17%] text-right text-3`}>QC用时</Text>
            <TextInput
              style={tw`border border-[#ccc] py-1 px-2 text-right flex-1 ml-2`}
            />
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`w-[17%] text-right text-3`}>磅数</Text>
            <TextInput
              style={tw`border border-[#ccc] py-1 px-2 text-right flex-1 ml-2`}
            />
          </View>
        </View>
        <View style={tw`py-3 border-b border-[#ddd]`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <View style={tw`flex-row justify-between items-center`}>
              <CheckBox
                containerStyle={tw`p-0 m-0`}
                checked={true}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
              />
              <Text style={tw`text-3 ml-1`}>不能QC</Text>
            </View>
            <Image
              source={require('../../../../../../assets/images/camera.png')}></Image>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-[#fd787f] pt-1`}>*</Text>
            <Text style={tw`text-3`}>还能按正常货品出货</Text>
            <TextInput
              style={tw`border border-[#ccc] py-1 px-2 flex-1 ml-2 mr-1 text-right`}
            />
            <Text style={tw`text-3 border border-[#ccc] py-1.3 px-2 `}>天</Text>
          </View>
        </View>
        <View style={tw`pt-5 pb-2 gap-2`}>
          <Text>QC Comment</Text>
          <TextInput style={tw`border border-[#ccc] p-2 h-15`} multiline />
        </View>
      </View>
      <Dialog.Actions>
        <View
          style={tw`flex-row items-center justify-center w-full border-t border-[#ddd] py-1`}>
          <Dialog.Button
            titleStyle={tw`text-[#000] w-[49.5%]`}
            title="Cancel"
            onPress={() => setIsOpenEditDialog(pre => ({...pre, open: false}))}
          />
          <View style={tw`w-[0.5%] bg-[#eee] h-[5]`} />
          <Dialog.Button
            titleStyle={tw`w-[49.5%]`}
            title="Submit"
            onPress={() => setIsOpenEditDialog(pre => ({...pre, open: false}))}
          />
        </View>
      </Dialog.Actions>
    </Dialog>
  );
};
