import { useState } from "react";

export const useHandleThemeContext = () => {
  const [backgroundTheme, setBackgroundTheme] = useState(false);

  const toggleTheme = () => {
    setBackgroundTheme(!backgroundTheme);
  };

  return { backgroundTheme, toggleTheme };
};
