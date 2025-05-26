import React, { createContext, useState, useContext } from "react";

const IsOpenContext = createContext();

export const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <IsOpenContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
};

export const useIsOpen = () => useContext(IsOpenContext);
