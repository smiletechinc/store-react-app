"use client"

import React, { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(() => {
    const storedData = localStorage.getItem('productsData');
    return storedData ? JSON.parse(storedData) : {products: []};
  });

  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : "";
  });

  useEffect(() => {
    localStorage.setItem('productsData', JSON.stringify(productsData));
  }, [productsData]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <DataContext.Provider value={{ productsData, setProductsData, userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
