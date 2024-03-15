// ThemeContext.js
import { createContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
