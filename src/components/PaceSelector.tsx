import { useContext, ChangeEvent } from "react";
import clsx from "clsx";
import { ThemeContext } from "../layout/Layout";

interface Props {
  pace: string;
  setPace: React.Dispatch<React.SetStateAction<string>>;
}

const PaceSelector = ({ pace, setPace }: Props) => {
  const theme = useContext(ThemeContext);
  const lightTheme = theme === "light";

  const handlePaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 5) {
      setPace(e.target.value);
    }
  };
  return (
    <div className="max-w-xs m-auto">
      <label
        htmlFor="pace"
        className={`block text-xs font-medium text-gray-200 ${clsx(
          lightTheme && "text-gray-900"
        )}`}
      >
        Allure moyenne (min / km) :
        <input
          name="pace"
          type="number"
          step="0.01"
          onChange={handlePaceChange}
          value={pace}
          className={`text-center text-5xl mb-2 mt-1 w-full rounded-md shadow-sm border-gray-700 ${clsx(
            lightTheme ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
          )}`}
        />
        <input
          type="range"
          name="pace"
          min="4.00"
          max="7.00"
          step="0.01"
          value={pace}
          onChange={handlePaceChange}
          className=" w-full mb-10"
        />
      </label>
    </div>
  );
};

export default PaceSelector;
