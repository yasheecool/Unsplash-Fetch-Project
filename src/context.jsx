import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const getInitialDarkMode = () => {
    if (localStorage.getItem("prefersDark") === null)
      return window.matchMedia("(prefers-color-scheme: dark)").matches;

    return localStorage.getItem("prefersDark") === "true";
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchValue, setSearchValue] = useState("cat");

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    query.addEventListener("change", () => {
      setIsDarkTheme(query.matches);
    });

    return () => query.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("prefersDark", true);
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("prefersDark", false);
    }
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
