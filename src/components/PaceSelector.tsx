import { useContext } from "react";
import clsx from "clsx";
import { ThemeContext } from "../layout/Layout";
import { MAX_MINUTES_PACE, MIN_MINUTES_PACE } from "../utils/variables";
import IncDecButton from "./IncDecButton";
import { usePaceHandler } from "../hooks/usePaceHandler";

interface Props {
  pace: string;
  setPace: React.Dispatch<React.SetStateAction<string>>;
}

const PaceSelector = ({ pace, setPace }: Props) => {
  const theme = useContext(ThemeContext);
  const lightTheme = theme === "light";
  const { handlePaceChange, handleRemoveSecond, handleAddSecond, outputPace } =
    usePaceHandler(pace, setPace);

  return (
    <div className="max-w-xs m-auto">
      <h2>Allure moyenne (min / km) :</h2>

      <div
        className={`flex text-center justify-between text-5xl p-3 mb-2 mt-1 w-full rounded-md border-gray-700 border border-solid ${clsx(
          lightTheme ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
        )}`}
      >
        <IncDecButton handleOnClick={handleRemoveSecond} actionType="dec" />
        <span>{outputPace}</span>
        <IncDecButton handleOnClick={handleAddSecond} actionType="inc" />
      </div>
      <label
        htmlFor="pace"
        className={`block text-xs font-medium text-gray-200 ${clsx(
          lightTheme && "text-gray-900"
        )}`}
      >
        <input
          type="number"
          name="pace"
          step={1}
          min={MIN_MINUTES_PACE * 60}
          max={MAX_MINUTES_PACE * 60}
          onChange={handlePaceChange}
          value={pace}
          hidden
        />
        <input
          type="range"
          name="pace"
          step={1}
          min={MIN_MINUTES_PACE * 60}
          max={MAX_MINUTES_PACE * 60}
          value={pace}
          onChange={handlePaceChange}
          className=" w-full mb-10"
        />
      </label>
    </div>
  );
};

export default PaceSelector;
