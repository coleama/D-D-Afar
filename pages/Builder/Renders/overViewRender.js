import React from 'react';
import { NameContextProvider } from '../../../utils/context/BuilderContext/NameContext';
import { ClassContextProvider } from '../../../utils/context/BuilderContext/ContextForClass';
import { RaceContextProvider } from '../../../utils/context/BuilderContext/RaceContext';
import { BackstoryContextProvider } from '../../../utils/context/BuilderContext/DescriptionContext';
import { StatsContextProvider } from '../../../utils/context/BuilderContext/StatsContext';
import ViewMember from '../Overview';

export default function OverView() {
  return (
    <BackstoryContextProvider>
      <ClassContextProvider>
        <RaceContextProvider>
          <NameContextProvider>
            <StatsContextProvider>
              <ViewMember />
            </StatsContextProvider>
          </NameContextProvider>
        </RaceContextProvider>
      </ClassContextProvider>
    </BackstoryContextProvider>
  );
}
