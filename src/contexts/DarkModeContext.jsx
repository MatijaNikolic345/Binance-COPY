import { createContext, useState } from "react";

export const DarkModeContext = createContext();
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkLight = darkQuery.matches ? "dark" : "light";
function DarkMode({ children }) {
  const [theme, setTheme] = useState(darkLight);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkMode;
