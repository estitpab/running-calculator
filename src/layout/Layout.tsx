import clsx from "clsx";
import { ReactNode } from "react";
import { useState, createContext } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext("dark");

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState("dark");
  const lightTheme = theme === "light";

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <section className={`bg-gray-900 text-white ${clsx(
              lightTheme && [
                "bg-white",
                "text-gray-900"
              ]
            )}`}>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">{children}</div>
        </div>
        <button onClick={handleThemeChange}>Afficher le thème {theme === "dark" ? "light" : "dark"}</button>
      </section>
    </ThemeContext.Provider>
  );
};

export default Layout;
