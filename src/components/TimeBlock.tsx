import clsx from "clsx";
import { calculateEstimatedTime } from "../utils/functions";

interface Props {
  distance: number;
  pace: string;
  note?: string;
}

const TimeBlock = ({ distance, pace, note }: Props) => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-start rounded-xl border border-gray-800 p-1 md:p-3 ${clsx(
        Boolean(note) && "pb-8 md:pb-8"
      )}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold title-gradient">{distance} km</h2>
      <p className=" text-xs">{calculateEstimatedTime(pace, distance)}</p>
      {note && (
        <p className=" bg-blue-900 absolute bottom-0 w-full left-0 text-blue-300 text-sm">
          {note}
        </p>
      )}
    </div>
  );
};

export default TimeBlock;
