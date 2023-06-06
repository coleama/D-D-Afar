import React from 'react';
import { ClassContextProvider } from '../../../utils/context/BuilderContext/ContextForClass';
import ClassSelection from '../ClassSelector';

function ClassSelectorRender() {
  return (
    <ClassContextProvider>
      <ClassSelection />
    </ClassContextProvider>
  );
}

export default ClassSelectorRender;
