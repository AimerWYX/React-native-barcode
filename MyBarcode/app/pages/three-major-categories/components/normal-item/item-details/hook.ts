import {useState} from 'react';

export const useAction = () => {
  const [tabAction, setTabAction] = useState<string>('蔬菜--水果豆制品粉蛋类');

  const [listData, setListData] = useState([
    {
      id: '10010012',
      title: 'Breast·MrSanderson··#40·鸡胸肉',
      SAP: 12,
      QTY: 12,
      Unit: 'CS',
      comment: '',
    },
    {
      id: '10010012CW',
      title: 'Breast·MrSanderson··CW·鸡胸肉',
      SAP: 12,
      QTY: 12,
      Unit: 'CS',
      comment: '',
    },
    {
      id: '10010004',
      title: 'Leg Mt·Wayne·40490(Flat)·#40·扁盒',
      SAP: 5,
      QTY: 5,
      Unit: 'CS',
      comment: '',
    },
    {
      id: '10010147CW',
      title: 'Leg Quarter·Wayne·849·CW·全鸡脾',
      SAP: 12,
      QTY: 12,
      Unit: 'CS',
      comment: '',
    },
    {
      id: '10010751CW',
      title: 'Young Frying Chicken·MJ·20392·CW·细鸡仔',
      SAP: 1,
      QTY: 1,
      Unit: 'CS',
      comment:
        '3/6 104756客人反馈1200LS司机3/7送来的不是细鸡仔，怀疑货仓出错货，麻烦货仓帮忙安排点库存，不需要调整，THX',
    },
  ]);

  return {
    tabAction,
    listData,
    setTabAction,
  };
};
