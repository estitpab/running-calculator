import { ChangeEvent, useState } from "react";
import { DEFAULT_MINUTES_PACE } from "../utils/variables";

export const usePaceHandler = (
  pace: string,
  setPace: React.Dispatch<React.SetStateAction<string>>
) => {
  const [displayedPace, setDisplayedPace] = useState([DEFAULT_MINUTES_PACE, 0]);
  const outputPace: string = `${displayedPace[0]}′${
    displayedPace[1] < 10 ? "0" + displayedPace[1] : displayedPace[1]
  }″`;

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

  return { handlePaceChange, handleRemoveSecond, handleAddSecond, outputPace };
};
