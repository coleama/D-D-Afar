/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const BackstoryContext = createContext();

function BackstoryContextProvider({ children }) {
  const [descData, setDescData] = useState([]);

  useEffect(() => {
    // Retrieve the stored descData from local storage
    const storedDescData = localStorage.getItem('descData');

    if (storedDescData) {
      // If stored descData exists, update the context state
      setDescData(JSON.parse(storedDescData));
    }
  }, []);

  useEffect(() => {
    // Store the descData in local storage whenever it changes
    localStorage.setItem('descData', JSON.stringify(descData));
  }, [descData]);

  const updateContext = (value) => {
    setDescData(value);
  };

  console.warn(descData);
  return (
    <BackstoryContext.Provider value={{ descData, updateContext }}>
      {children}
    </BackstoryContext.Provider>
  );
}

export { BackstoryContext, BackstoryContextProvider };
