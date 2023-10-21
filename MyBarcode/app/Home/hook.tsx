// import React = require('react');
import {ReactNode, useState} from 'react';

interface linkCardListDto {
  moduleTitle: string;
  linkCardList: linkCardListIcon[];
}

interface linkCardListIcon {
  icon?: ReactNode;
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
          title: 'PO Receive',
          background: '[#eac793]',
          link: 'ThreeMajorCategories',
        },
        {
          title: 'STO Receive',
          background: '[#fbe9a4]',
        },
        {
          title: 'SubCon Receive',
          background: '[#a29dc7]',
        },
        {
          title: 'Scan to view label info',
          background: '[#da7b86]',
        },
        {
          title: 'Return SO',
          background: '[#818ac4]',
        },
      ],
    },
    {
      moduleTitle: 'Deliver Goods',
      linkCardList: [
        {
          title: 'Return PO',
          background: '[#80c9ae]',
        },
        {
          title: 'STO Deliver',
          background: '[#ecde61]',
        },
        {
          title: 'SubCon Deliver',
          background: '[#b99fa8]',
        },
        {
          title: 'Show Bin Status',
          background: '[#e58e80]',
        },
        {
          title: 'SO Deliver',
          background: '[#9d7979]',
        },
      ],
    },
    {
      moduleTitle: 'Inventory Management',
      linkCardList: [
        {
          title: 'Update CW',
          background: '[#48a6c7]',
        },
        {
          title: 'Search Item',
          background: '[#86d6f0]',
        },
        {
          title: 'CS to PC',
          background: '[#9bc744]',
        },
        {
          title: 'PC to CS',
          background: '[#f8971f]',
        },
        {
          title: 'Fresh to Forzen',
          background: '[#6e97da]',
        },
        {
          title: 'A Item to B Item',
          background: '[#2ea294]',
        },
        {
          title: 'Inventory loss',
          background: '[#ebb72d]',
        },
        {
          title: 'Inventory surplus',
          background: '[#3eade9]',
        },
        {
          title: 'Bin to Bin',
          background: '[#d26863]',
        },
        {
          title: 'Checklist',
          background: '[#62c63e]',
        },
      ],
    },
  ];

  return {isStyle, linkCardList, setIsStyle};
};
