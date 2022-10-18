import { useContext, createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    let router = useRouter();
    let [inStorage, setInStorage] = useState(null);
    let [theme, setTheme] = useState("dark");



    useEffect(() => {
        if (inStorage === null) {
            let storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            } else {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    setTheme("dark");
                } else {
                    setTheme("light");
                }
            }
            setInStorage(true);
        }
    }, [inStorage]);

    useEffect(() => {
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        if (newTheme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const changeTheme = (theme) => {
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };


    return (
        <ThemeContext.Provider value={{ isTheme: theme, toggleTheme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};