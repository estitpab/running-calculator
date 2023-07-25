import { ReactNode } from "react";
import { useState, createContext } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext("dark");

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">{children}</div>
        </div>
        <button onClick={handleThemeChange}>{theme}</button>
      </section>
    </ThemeContext.Provider>
  );
};

export default Layout;
