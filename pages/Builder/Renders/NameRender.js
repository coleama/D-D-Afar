import React from 'react';
import NameForm from '../Name';
import { NameContextProvider } from '../../../utils/context/BuilderContext/NameContext';

function NameRender() {
  return (
    <NameContextProvider>
      <NameForm />
    </NameContextProvider>
  );
}

export default NameRender;
