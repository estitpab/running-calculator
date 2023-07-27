import clsx from "clsx";
import { ReactNode } from "react";
import { useState, createContext } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext("dark");

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState("dark");
  const lightTheme = theme === "light";

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <section
        className={`min-h-screen transition duration-500 ${clsx(
          lightTheme ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        )}`}
      >
        <div className="mx-auto max-w-screen-xl px-4 pt-10 flex h-screen lg:py-10 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">{children}</div>
        </div>
        <ThemeSwitcher handleOnChange={handleThemeChange}/>
        {/* <button onClick={handleThemeChange} className=" absolute bottom-1 left-1"
        >
          Afficher le thème {theme === "dark" ? "light" : "dark"}
        </button> */}
      </section>
    </ThemeContext.Provider>
  );
};

export default Layout;
