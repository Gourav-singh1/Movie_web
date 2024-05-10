import React, { createContext, useState, useContext } from "react";
export const MyContext = createContext();

function ContextUse({ children }) {
  const [Done, setDone] = useState(false);
  return (
    <>
      <MyContext.Provider
        value={{
          Done,
          setDone,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export default ContextUse;
