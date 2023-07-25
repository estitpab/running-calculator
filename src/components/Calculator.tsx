import { useState, ChangeEvent, useContext } from "react";
import { ThemeContext } from "../layout/Layout";

const DEFAULT_PACE = 0;

const Calculator = () => {
  const [pace, setPace] = useState(DEFAULT_PACE.toFixed(2));
  const [distance, setDistance] = useState(10);
  const theme = useContext(ThemeContext);

  console.log({ theme });

  const handlePaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPace(Number.parseFloat(e.target.value).toFixed(2));
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(e.target.value));
  };

  const calculateEstimatedTime = (pace: string, distanceInKm: number) => {
    const paceInSeconds = Number(pace) * 60;
    const timeInSeconds = paceInSeconds * distanceInKm;
    const timeInMinutes = Math.floor((timeInSeconds % 3600) / 60);
    const timeInHours = Math.floor(timeInSeconds / 3600);
    const remainingSeconds = Math.floor(timeInSeconds % 60);

    if (timeInHours > 0) {
      return `${timeInHours} h ${timeInMinutes} min ${remainingSeconds} s`;
    } else {
      return `${timeInMinutes} min ${remainingSeconds} s`;
    }
  };

  return (
    <div className="justify-center">
      <div className="max-w-xs m-auto">
        <label
          htmlFor="pace"
          className="block text-xs font-medium text-gray-200"
        >
          Allure moyenne (min / sec) :
          <input
            name="pace"
            type="number"
            step=".01"
            onChange={handlePaceChange}
            value={pace}
            className="text-center text-5xl mb-10 mt-1 w-full rounded-md shadow-sm border-gray-700 bg-gray-800 text-white"
          />
        </label>
      </div>

      <p>Temps estimé sur 5 km : {calculateEstimatedTime(pace, 5)}</p>
      <p>Temps estimé sur 10 km : {calculateEstimatedTime(pace, 10)}</p>
      <p>
        Temps estimé sur un semi-marathon (21,1 km) :{" "}
        {calculateEstimatedTime(pace, 21.1)}
      </p>
      <p>
        Temps estimé sur un marathon (42,195 km) :{" "}
        {calculateEstimatedTime(pace, 42.195)}
      </p>

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
