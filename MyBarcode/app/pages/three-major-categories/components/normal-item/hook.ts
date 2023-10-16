import {useState} from 'react';

export type normalItemDto = {
  name: string;
  startDate: string;
  endDate: string;
  count: string;
};

export const useAction = () => {
  const [normalItem, setNormalItem] = useState<normalItemDto[]>([
    {name: 'CHICKEN', startDate: '--', endDate: '--', count: '0/5'},
    {name: 'BEEF', startDate: '--', endDate: '--', count: '0/200'},
    {name: 'PORK', startDate: '--', endDate: '--', count: '0/200'},
    {
      name: 'SHRIMP',
      startDate: '--',
      endDate: '--',
      count: '0/200',
    },
    {
      name: 'SEA FOOD',
      startDate: '--',
      endDate: '--',
      count: '0/200',
    },
    {
      name: 'OTHER FOOD',
      startDate: '--',
      endDate: '--',
      count: '0/200',
    },
    {
      name: 'VEGETABLE',
      startDate: '--',
      endDate: '--',
      count: '0/155',
    },
    {
      name: 'DRY FOODS',
      startDate: '--',
      endDate: '--',
      count: '0/200',
    },
  ]);

  const [isSignIn, setIsSignIn] = useState<{signIn: boolean; signOut: boolean}>(
    {signIn: false, signOut: false},
  );

  return {normalItem, isSignIn, setNormalItem, setIsSignIn};
};
