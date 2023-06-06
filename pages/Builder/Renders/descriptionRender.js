import React from 'react';
import { BackstoryContextProvider } from '../../../utils/context/BuilderContext/DescriptionContext';
import BackStoryForm from '../Description';

function descriptionRender() {
  return (
    <BackstoryContextProvider>
      <BackStoryForm />
    </BackstoryContextProvider>
  );
}

export default descriptionRender;
