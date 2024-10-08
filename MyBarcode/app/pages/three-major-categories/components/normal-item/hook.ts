import {useState} from 'react';
import {dialogType} from './props';

export type normalItemDto = {
  name: string;
  startDate: string;
  endDate: string;
  count: string;
  check: boolean;
};

export const useAction = () => {
  const [normalItem, setNormalItem] = useState<normalItemDto[]>([
    {
      name: 'CHICKEN',
      startDate: '--',
      endDate: '--',
      count: '0/5',
      check: false,
    },
    {
      name: '蔬菜--水果豆制品粉蛋类',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'BEEF',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'PORK',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'SHRIMP',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'SEA FOOD',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'OTHER FOOD',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
    {
      name: 'VEGETABLE',
      startDate: '--',
      endDate: '--',
      count: '0/155',
      check: false,
    },
    {
      name: 'DRY FOODS',
      startDate: '--',
      endDate: '--',
      count: '0/200',
      check: false,
    },
  ]);

  const [openDialogType, setOpenDialogType] = useState<dialogType>({
    view: false,
    signIn: false,
    signOut: false,
  });

  return {normalItem, openDialogType, setNormalItem, setOpenDialogType};
};
