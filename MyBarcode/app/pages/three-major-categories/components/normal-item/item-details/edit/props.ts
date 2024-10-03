import {listDto} from '../hook';

export interface editItemDetailsProps {
  isOpenEditDialog: {
    open: boolean;
    listData: listDto;
  };
  setIsOpenEditDialog: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      listData: listDto;
    }>
  >;
}
