import LocationOutline from 'antd-mobile-icons/es/LocationOutline';
import React = require('react');
import {ReactNode, useState} from 'react';

interface linkCardListDto {
  moduleTitle: string;
  linkCardList: linkCardListIcon[];
}

interface linkCardListIcon {
  icon: ReactNode;
  title: string;
  background: string;
}

export const useAction = () => {
  const [isStyle, setIsStyle] = useState<boolean>(false);

  const linkCardList: linkCardListDto[] = [
    {
      moduleTitle: 'Receiving Goods',
      linkCardList: [
        {
          icon: <LocationOutline />,
          title: 'PO Receive',
          background: '[#eac793]',
        },
      ],
    },
    {
      moduleTitle: 'Deliver Goods',
      linkCardList: [
        {
          icon: <LocationOutline />,
          title: 'Return PO',
          background: '[#80c9ae]',
        },
      ],
    },
    {
      moduleTitle: 'Inventory Management',
      linkCardList: [
        {
          icon: <LocationOutline />,
          title: 'Update CW',
          background: '[#48a6c7]',
        },
      ],
    },
  ];

  return {isStyle, linkCardList, setIsStyle};
};
