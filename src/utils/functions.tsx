export const calculateEstimatedTime = (pace: string, distanceInKm: number) => {
  const paceInSeconds = Number(pace) * 60;
  const timeInSeconds = paceInSeconds * distanceInKm;
  const timeInMinutes = Math.floor((timeInSeconds % 3600) / 60);
  const timeInHours = Math.floor(timeInSeconds / 3600);
  const remainingSeconds = Math.floor(timeInSeconds % 60);

  if (timeInHours > 0) {
    //TODO: Masquer les secondes si 0 (ex à 5,00)
    return `${timeInHours} h ${timeInMinutes} min ${remainingSeconds} s`;
  } else {
    return `${timeInMinutes} min ${remainingSeconds} s`;
  }
};
