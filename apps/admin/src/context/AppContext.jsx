import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(true);
  const [isHideHeaderAndFooter, setisHideHeaderAndFooter] = useState(false);

  const values = {
    isLogin,
    setisLogin,
    isHideHeaderAndFooter,
    setisHideHeaderAndFooter,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};
