import { useContext, ChangeEvent, useState, useRef } from "react";
import clsx from "clsx";
import { ThemeContext } from "../layout/Layout";
import {
  DEFAULT_MINUTES_PACE,
  MAX_MINUTES_PACE,
  MIN_MINUTES_PACE,
} from "../utils/variables";

interface Props {
  pace: string;
  setPace: React.Dispatch<React.SetStateAction<string>>;
}

const PaceSelector = ({ pace, setPace }: Props) => {
  const secondInput = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);
  const lightTheme = theme === "light";
  const [displayedPace, setDisplayedPace] = useState([DEFAULT_MINUTES_PACE, 0]);
  const outputPace: string = `${displayedPace[0]}′${
    displayedPace[1] < 10 ? "0" + displayedPace[1] : displayedPace[1]
  }″`;

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const seconds = e.target.value;
    const myDate: Date = new Date();
    myDate.setMinutes(0, Number(seconds));

    const outputMinutes: number = myDate.getMinutes();
    const outputSeconds: number = myDate.getSeconds();

    setDisplayedPace([outputMinutes, outputSeconds]);
    setPace(seconds);
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
        <p
          className={`text-center text-5xl p-3 mb-2 mt-1 w-full rounded-md border-gray-700 border border-solid ${clsx(
            lightTheme ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
          )}`}
          onClick={() => secondInput.current?.focus()}
        >
          {outputPace}
        </p>
        <input
          ref={secondInput}
          type="number"
          step={1}
          min={MIN_MINUTES_PACE * 60}
          max={MAX_MINUTES_PACE * 60}
          onChange={handleDateChange}
          value={pace}
          className=" absolute -z-10"
        />
        <input
          type="range"
          name="pace"
          step={1}
          min={MIN_MINUTES_PACE * 60}
          max={MAX_MINUTES_PACE * 60}
          value={pace}
          onChange={handleDateChange}
          className=" w-full mb-10"
        />
      </label>
    </div>
  );
};

export default PaceSelector;
