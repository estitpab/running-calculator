import { ChangeEvent, useState } from "react";
import { calculateEstimatedTime } from "../utils/functions";

interface Props {
  pace: string;
}

const SlideBlock = ({ pace }: Props) => {
  const [distance, setDistance] = useState(10);

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance(Number(e.target.value));
  };

  return (
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
  );
};

export default SlideBlock;
