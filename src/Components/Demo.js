import React from "react";
import { useTheme } from "next-themes";

const Demo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition duration-300">
      {/* Header */}
      <header className="p-4 bg-blue-600 dark:bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Light/Dark Mode Demo</h1>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-4 py-2 bg-yellow-500 text-black dark:bg-yellow-400 dark:text-gray-900 rounded-md transition duration-300"
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to {theme} mode!</h2>
        <p>This is a simple demo of light and dark mode using Tailwind CSS.</p>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-semibold mb-2">Example Card</h3>
          <p>
            This card changes styles based on the current theme, demonstrating
            Tailwind's <code>dark:</code> utilities.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Demo;

// import React, { useState, useEffect } from "react";

// const Demo = () => {
//   const [theme, setTheme] = useState("light"); // Default to Light Mode

//   // Sync with localStorage on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.add(savedTheme);
//     } else {
//       document.documentElement.classList.add("light");
//     }
//   }, []);

//   // Update localStorage and <html> class whenever the theme changes
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);

//     document.documentElement.classList.remove("light", "dark");
//     document.documentElement.classList.add(newTheme);
//   };

//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition duration-300">
//       {/* Header */}
//       <header className="p-4 bg-blue-600 dark:bg-gray-800 text-white">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Custom Light/Dark Mode Demo</h1>
//           <button
//             onClick={toggleTheme}
//             className="px-4 py-2 bg-yellow-500 text-black dark:bg-yellow-400 dark:text-gray-900 rounded-md transition duration-300"
//           >
//             Toggle {theme === "light" ? "Dark" : "Light"} Mode
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold mb-4">Welcome to {theme} mode!</h2>
//         <p>
//           This is a custom implementation of light and dark mode using Tailwind
//           CSS without any external libraries.
//         </p>
//         <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mt-6">
//           <h3 className="text-xl font-semibold mb-2">Example Card</h3>
//           <p>
//             This card dynamically updates its styles based on the theme you
//             choose.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Demo;
