import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [theme, settheme] = useState('dark')

    const ToggleTheme = () => {
        settheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        ToggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
