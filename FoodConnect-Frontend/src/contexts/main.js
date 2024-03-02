import React, { createContext, useState } from 'react';

const VariableContext = createContext();

export const VariableProvider = ({ children }) => {
  const [variable, setVariable] = useState(null); // Initial value is null, you can set it to any value you want

  return (
    <VariableContext.Provider value={{ variable, setVariable }}>
      {children}
    </VariableContext.Provider>
  );
};

export default VariableContext;