import React, { createContext } from 'react';

export const ThemeContext = createContext('light')
const ThemeProvider = ({children}) => {
    return <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
};

export default ThemeProvider;