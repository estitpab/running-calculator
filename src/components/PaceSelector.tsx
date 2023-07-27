import { useContext, ChangeEvent, useState } from "react";
import clsx from "clsx";
import { ThemeContext } from "../layout/Layout";
import {
  DEFAULT_MINUTES_PACE,
  MAX_MINUTES_PACE,
  MIN_MINUTES_PACE,
} from "../utils/variables";
import IncDecButton from "./IncDecButton";

interface Props {
  pace: string;
  setPace: React.Dispatch<React.SetStateAction<string>>;
}

const PaceSelector = ({ pace, setPace }: Props) => {
  const theme = useContext(ThemeContext);
  const lightTheme = theme === "light";
  const [displayedPace, setDisplayedPace] = useState([DEFAULT_MINUTES_PACE, 0]);
  const outputPace: string = `${displayedPace[0]}′${
    displayedPace[1] < 10 ? "0" + displayedPace[1] : displayedPace[1]
  }″`;

  console.log("🎃 displayedPace", displayedPace);
  console.log("🚀 pace", pace);

  const updatePaceDisplay = (seconds: string) => {
    const myDate: Date = new Date();
    myDate.setMinutes(0, Number(seconds));

    const outputMinutes: number = myDate.getMinutes();
    const outputSeconds: number = myDate.getSeconds();

    setDisplayedPace([outputMinutes, outputSeconds]);
    setPace(seconds);
  };

  const handlePaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const seconds = e.target.value;
    updatePaceDisplay(seconds);
  };

  const handleRemoveSecond = () => {
    const seconds = String(Number(pace) - 1);
    updatePaceDisplay(seconds);
  };

  const handleAddSecond = () => {
    const seconds = String(Number(pace) + 1);
    updatePaceDisplay(seconds);
  };

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
