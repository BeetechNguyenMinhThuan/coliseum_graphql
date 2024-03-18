// ThemeContext.js
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const LayoutProvider = ({ children }) => {
  const [heightHero, setHeightHero] = useState(null);

  return (
    <ThemeContext.Provider value={{ heightHero, setHeightHero }}>
      {children}
    </ThemeContext.Provider>
  );
};
