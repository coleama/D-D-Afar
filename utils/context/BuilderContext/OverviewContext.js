/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { NameContext } from './NameContext';
import { ClassContext } from './ContextForClass';
import { StatsContext } from './StatsContext';
import { RaceContext } from './RaceContext';
import { BackstoryContext } from './DescriptionContext';

const FinalContext = createContext();

function FinalContextProvider({ children }) {
  const nameValue = useContext(NameContext);
  const classValue = useContext(ClassContext);
  const statsValue = useContext(StatsContext);
  const raceValue = useContext(RaceContext);
  const backStoryValue = useContext(BackstoryContext);

  return (
    <FinalContext.Provider value={{
      ...nameValue, ...classValue, ...statsValue, ...backStoryValue, ...raceValue,
    }}
    >
      {children}
    </FinalContext.Provider>
  );
}

export { FinalContext, FinalContextProvider };
