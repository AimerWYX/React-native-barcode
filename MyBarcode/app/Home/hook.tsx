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
  link?: string;
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
          link: 'ThreeMajorCategories',
        },
        {
          icon: <LocationOutline />,
          title: 'STO Receive',
          background: '[#fbe9a4]',
        },
        {
          icon: <LocationOutline />,
          title: 'SubCon Receive',
          background: '[#a29dc7]',
        },
        {
          icon: <LocationOutline />,
          title: 'Scan to view label info',
          background: '[#da7b86]',
        },
        {
          icon: <LocationOutline />,
          title: 'Return SO',
          background: '[#818ac4]',
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
        {
          icon: <LocationOutline />,
          title: 'STO Deliver',
          background: '[#ecde61]',
        },
        {
          icon: <LocationOutline />,
          title: 'SubCon Deliver',
          background: '[#b99fa8]',
        },
        {
          icon: <LocationOutline />,
          title: 'Show Bin Status',
          background: '[#e58e80]',
        },
        {
          icon: <LocationOutline />,
          title: 'SO Deliver',
          background: '[#9d7979]',
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
        {
          icon: <LocationOutline />,
          title: 'Search Item',
          background: '[#86d6f0]',
        },
        {
          icon: <LocationOutline />,
          title: 'CS to PC',
          background: '[#9bc744]',
        },
        {
          icon: <LocationOutline />,
          title: 'PC to CS',
          background: '[#f8971f]',
        },
        {
          icon: <LocationOutline />,
          title: 'Fresh to Forzen',
          background: '[#6e97da]',
        },
        {
          icon: <LocationOutline />,
          title: 'A Item to B Item',
          background: '[#2ea294]',
        },
        {
          icon: <LocationOutline />,
          title: 'Inventory loss',
          background: '[#ebb72d]',
        },
        {
          icon: <LocationOutline />,
          title: 'Inventory surplus',
          background: '[#3eade9]',
        },
        {
          icon: <LocationOutline />,
          title: 'Bin to Bin',
          background: '[#d26863]',
        },
        {
          icon: <LocationOutline />,
          title: 'Checklist',
          background: '[#62c63e]',
        },
      ],
    },
  ];

  return {isStyle, linkCardList, setIsStyle};
};
