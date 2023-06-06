import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Dice from 'react-dice-roll';
import { StatsContextProvider } from '../../../utils/context/BuilderContext/StatsContext';
import StatsForm from '../Stats';

function StatsRender() {
  return (
    <StatsContextProvider>
      <div className="dice">
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>
      <StatsForm />
    </StatsContextProvider>
  );
}

export default StatsRender;
