import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
 
  return (
    <MyContext.Provider value={{isLogin, setIsLogin, email, setEmail}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);


