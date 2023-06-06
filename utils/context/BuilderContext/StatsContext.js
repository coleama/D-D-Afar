/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const StatsContext = createContext();

function StatsContextProvider({ children }) {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    // Retrieve the stored statsData from local storage
    const storedStatsData = localStorage.getItem('statsData');

    if (storedStatsData) {
      // If stored statsData exists, update the context state
      setStatsData(JSON.parse(storedStatsData));
    }
  }, []);

  useEffect(() => {
    // Store the statsData in local storage whenever it changes
    localStorage.setItem('statsData', JSON.stringify(statsData));
  }, [statsData]);

  const updateContext = (value) => {
    setStatsData(value);
  };

  console.warn(statsData);
  return (
    <StatsContext.Provider value={{ statsData, updateContext }}>
      {children}
    </StatsContext.Provider>
  );
}

export { StatsContext, StatsContextProvider };
