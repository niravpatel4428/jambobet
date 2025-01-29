import React, { useEffect, useState } from 'react'
import Casino from './Casino'
import Layout from '../../layout'
import Slidersection from '../HomePage/Slider'
import mobilelight from "../../images/mobilelight.svg";
import mobiledark from "../../images/mobiledark.svg";

const Casinopage = () => {

    const [isDarkMode, setIsDarkMode] = useState(
            window.matchMedia('(prefers-color-scheme: dark)').matches
        );
    
        useEffect(() => {
            const updateTheme = () => {
                if (isDarkMode) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            };
    
            updateTheme();
    
            // Listen for system preference changes
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (event) => setIsDarkMode(event.matches);
    
            mediaQuery.addEventListener('change', handleChange);
    
            return () => mediaQuery.removeEventListener('change', handleChange);
        }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        // Toggle the dark mode theme
        const newTheme = isDarkMode ? "light" : "dark";
        localStorage.setItem("theme", newTheme);

        // Apply the theme to the document element
        document.documentElement.classList.toggle("dark", newTheme === "dark");

        // Update the state
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Check localStorage or OS preference on page load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Handle default based on system preference
            const prefersDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDarkMode(prefersDarkMode);
            document.documentElement.classList.toggle("dark", prefersDarkMode);
        }
    }, []);

    return (
        <>
            <Layout>
                <button
                    onClick={toggleTheme}
                    className="fixed top-[250px] right-0 z-[999] max-sm:flex sm:hidden max-md:w-[40px] max-md:h-[40px] w-[48px] h-[50px] flex justify-center items-center p-[5px_5px_5px_7px] bg-mutedblue dark:bg-yellow rounded-[5px_0px_0px_5px]"
                >
                    <img
                        src={isDarkMode ? mobiledark : mobilelight}
                        alt={"Light Mode"}
                        className=""
                    />
                </button>
                <Slidersection />
                <Casino />
            </Layout>
        </>
    )
}

export default Casinopage
