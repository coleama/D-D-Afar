/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';

const RaceContext = createContext();

function RaceContextProvider({ children }) {
  const [raceData, setRaceData] = useState([]);

  useEffect(() => {
    // Retrieve the stored formData from local storage
    const storedRaceData = localStorage.getItem('raceData');

    if (storedRaceData) {
      // If stored raceData exists, update the context state
      setRaceData(JSON.parse(storedRaceData));
    }
  }, []);

  useEffect(() => {
    // Store the raceData in local storage whenever it changes
    localStorage.setItem('raceData', JSON.stringify(raceData));
  }, [raceData]);

  const handleButtonClick = (data) => {
    setRaceData(data);
  };
  console.warn(raceData, handleButtonClick);
  return (
    <RaceContext.Provider value={{ raceData, handleButtonClick }}>
      {children}
    </RaceContext.Provider>
  );
}

export { RaceContext, RaceContextProvider };
