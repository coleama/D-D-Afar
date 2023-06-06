import React from 'react';
import { RaceContextProvider } from '../../../utils/context/BuilderContext/RaceContext';
import RaceSelection from '../Race';

function RaceRender() {
  return (
    <RaceContextProvider>
      <RaceSelection />
    </RaceContextProvider>
  );
}

export default RaceRender;
