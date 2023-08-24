import {useState} from 'react';

export const useAction = () => {
  const [userName, setUserName] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  return {
    userName,
    password,
    setUserName,
    setPassword,
  };
};
