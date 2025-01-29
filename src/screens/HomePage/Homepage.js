import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import Slidersection from './Slider'
import Dashboard from './Dashboard'
import mobilelight from "../../images/mobilelight.svg";
import mobiledark from "../../images/mobiledark.svg";

const Homepage = () => {

    useEffect(() => {
        // Detect user's system preference
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
        if (isDarkMode) {
          document.documentElement.classList.add('dark'); // Add the 'dark' class to <html>
        } else {
          document.documentElement.classList.remove('dark');
        }
    
        // Optional: Listen for changes in the user's system preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
          if (event.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        };
    
        mediaQuery.addEventListener('change', handleChange);
    
        // Cleanup event listener
        return () => mediaQuery.removeEventListener('change', handleChange);
      }, []);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
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
                <Dashboard />
            </Layout>
        </>
    )
}

export default Homepage
