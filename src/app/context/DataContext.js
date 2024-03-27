"use client"

import React, { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext();
const isBrowser = typeof window !== 'undefined';

export const DataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(() => {
    if (isBrowser) {
      // Access localStorage
      const storedData = localStorage.getItem('productsData');
      return storedData ? JSON.parse(storedData) : {products: []};
    } else {
      // Handle non-browser environment
      console.warn('Error fetching data from server side')
    }
  });

  const [userData, setUserData] = useState(() => {
    if (isBrowser) {
      // Access localStorage
          const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : "";
    } else {
      // Handle non-browser environment
      console.warn('Error fetching data from server side')
    }
  });

  const [allUsersData, setAllUsersData] = useState(() => {
    if(isBrowser) {
      //AccessLocalStorage
      const storedData = localStorage.getItem('allUsersData');
      return storedData ? JSON.parse(storedData) : "";
    }
  });

  useEffect(() => {
    localStorage.setItem('productsData', JSON.stringify(productsData));
  }, [productsData]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

    useEffect(() => {
      console.log("DataContext -> allUsersData: ", allUsersData)
    localStorage.setItem('allUsersData', JSON.stringify(allUsersData));
  }, [allUsersData]);

  const removeData = () => {
    console.log("Data removing");
    localStorage.removeItem('userData');
    localStorage.removeItem('productsData');
  }

  return (
    <DataContext.Provider value={{ productsData, setProductsData, userData, setUserData, removeData, allUsersData, setAllUsersData }}>
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
