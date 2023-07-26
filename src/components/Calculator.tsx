import { useState, ChangeEvent, useContext } from "react";
import { ThemeContext } from "../layout/Layout";
import clsx from "clsx";
import TimeBlock from "./TimeBlock";
import { calculateEstimatedTime } from "../utils/functions";

const DEFAULT_PACE = 5.3;

const Calculator = () => {
  const [pace, setPace] = useState(DEFAULT_PACE.toFixed(2));
  const [distance, setDistance] = useState(10);
  const theme = useContext(ThemeContext);
  const lightTheme = theme === "light";

  const handlePaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 5) {
      setPace(e.target.value);
    }
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(e.target.value));
  };

  return (
    <div className="justify-center">
      <div className="max-w-xs m-auto">
        <label
          htmlFor="pace"
          className={`block text-xs font-medium text-gray-200 ${clsx(
            lightTheme && "text-gray-900"
          )}`}
        >
          Allure moyenne (min / sec) :
          <input
            name="pace"
            type="number"
            step="0.01"
            onChange={handlePaceChange}
            value={pace}
            className={`text-center text-5xl mb-10 mt-1 w-full rounded-md shadow-sm border-gray-700 "bg-gray-800 bg-gray-800 text-white ${clsx(
              lightTheme && ["bg-gray-200", "text-gray-900"]
            )}`}
          />
        </label>
      </div>

      <h2>Calcul des temps estimés :</h2>

      <section className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-3">
        <TimeBlock distance={5} pace={pace} />
        <TimeBlock distance={10} pace={pace} />
        <TimeBlock distance={15} pace={pace} />
      </section>
      <section className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <TimeBlock distance={21.1} pace={pace} note="semi-marathon" />
        <TimeBlock distance={42.195} pace={pace} note="marathon" />
      </section>

      <div>
        <label htmlFor="distance">
          Distance : {distance} km
          <input
            type="range"
            name="distance"
            min="0"
            max="100"
            value={distance}
            onChange={handleDistanceChange}
          />{" "}
          {calculateEstimatedTime(pace, distance)}
        </label>
      </div>
    </div>
  );
};

export default Calculator;
