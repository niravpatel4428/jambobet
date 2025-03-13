import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./screens/HomePage/Homepage";
import Casinopage from "./screens/CasinoPage/Casinopage";
import Transactionpage from "./screens/TransactionPage/Transactionpage";
import whitesun from "./images/whitesun.svg";
import moonwhite from "./images/moonwhite.svg";
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.toggle("dark", prefersDarkMode);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/casino" element={<Casinopage />} />
          <Route path="/transaction" element={<Transactionpage />} />
        </Routes>
      </Router>

      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex justify-center items-center bg-darkblue dark:bg-yellow rounded-[5px_0px_0px_5px] fixed right-0 z-10 top-[33%] sm:hidden"
      >
        <img
          src={isDarkMode ? moonwhite : whitesun}
          alt={"Light Mode"}
          className="size-5 s18:size-[26px]"
        />
      </button>
    </>
  );
}

export default App;
