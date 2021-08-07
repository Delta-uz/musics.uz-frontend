import React from "react";
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#e5e5e5',
      background: '#222222',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // значение по умолчанию
  );