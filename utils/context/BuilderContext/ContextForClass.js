/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const ClassContext = createContext();

function ClassContextProvider({ children }) {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const storedClassData = localStorage.getItem('classData');

    if (storedClassData) {
      setClassData(JSON.parse(storedClassData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('classData', JSON.stringify(classData));
  }, [classData]);

  const updateContext = (value) => {
    setClassData(value);
  };
  console.warn(classData);
  return (
    <ClassContext.Provider value={{ classData, updateContext }}>
      {children}
    </ClassContext.Provider>
  );
}

export { ClassContext, ClassContextProvider };
