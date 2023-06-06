/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const NameContext = createContext();

function NameContextProvider({ children }) {
  const [nameData, setNameData] = useState([]);
  useEffect(() => {
    // Retrieve the stored formData from local storage
    const storedNameData = localStorage.getItem('nameData');

    if (storedNameData) {
      // If stored formData exists, update the context state
      setNameData(JSON.parse(storedNameData));
    }
  }, []);

  useEffect(() => {
    // Store the formData in local storage whenever it changes
    localStorage.setItem('nameData', JSON.stringify(nameData));
  }, [nameData]);

  const updateContext = (value) => {
    setNameData(value);
  };

  console.warn(nameData);
  return (
    <NameContext.Provider value={{ nameData, updateContext }}>
      {children}
    </NameContext.Provider>
  );
}

export { NameContext, NameContextProvider };
