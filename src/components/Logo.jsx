import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './ToggleButton'; // Adjust the path as necessary

const Logo = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [logoSrc, setLogoSrc] = useState('/images/dvinaynewlogo.svg');

    useEffect(() => {
        const updateLogo = () => {
            if (isDarkMode) {
                setLogoSrc('/images/dvinaynewlogowhite.svg');
            } else {
                setLogoSrc('/images/dvinaynewlogo.svg');
            }
        };

        // Initial check
        updateLogo();

        // Listen for changes in the theme context
        const handleThemeChange = () => {
            updateLogo();
        };

        // Add event listener for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        // Cleanup listener on component unmount
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, [isDarkMode]);

    return (
        <div className='logo_img'>
            <img src={logoSrc} alt="Logo" />
        </div>
    );
};

export default Logo;
