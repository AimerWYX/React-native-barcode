import {Dialog, CheckBox} from '@rneui/base';
import {View} from 'react-native';
import tw from 'twrnc';
import {dialogType} from '../props';
import {ReactNode} from 'react';

export const DialogType = (props: {
  isOpen: boolean;
  setOpenDialogType: React.Dispatch<React.SetStateAction<dialogType>>;
  title: string;
  children: ReactNode;
}) => {
  const {isOpen, setOpenDialogType, title, children} = props;

  return (
    <Dialog
      isVisible={isOpen}
      onBackdropPress={() => {}}
      overlayStyle={tw`bg-white p-0`}>
      <Dialog.Title
        title={title}
        titleStyle={tw`px-5 py-3 bg-[#1790ff] text-white`}
      />
      {children}
      <Dialog.Actions>
        <View
          style={tw`flex-row items-center justify-center w-full border-t border-[#ddd] py-1`}>
          <Dialog.Button
            titleStyle={tw`text-[#000] w-[49.5%]`}
            title="Cancel"
            onPress={() =>
              setOpenDialogType({
                view: false,
                signIn: false,
                signOut: false,
              })
            }
          />
          <View style={tw`w-[0.5%] bg-[#eee] h-[5]`} />
          <Dialog.Button
            titleStyle={tw`w-[49.5%]`}
            title="Sure"
            onPress={() =>
              setOpenDialogType({
                view: false,
                signIn: false,
                signOut: false,
              })
            }
          />
        </View>
      </Dialog.Actions>
    </Dialog>
  );
};
