import React, { useState, useEffect, createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faIceCream } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.css';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize based on system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ToggleButton = () => {
    const { isDarkMode, toggleMode } = useContext(ThemeContext);

    return (
        <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleMode}>
            <FontAwesomeIcon icon={isDarkMode ? faMugHot : faIceCream} />
        </button>
    );
};

export { ThemeProvider, ToggleButton, ThemeContext };
