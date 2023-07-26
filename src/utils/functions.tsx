export const calculateEstimatedTime = (pace: string, distanceInKm: number) => {
  const paceInSeconds = Number(pace) * 60;
  const timeInSeconds = paceInSeconds * distanceInKm;
  const timeInMinutes = Math.floor((timeInSeconds % 3600) / 60);
  const timeInHours = Math.floor(timeInSeconds / 3600);
  const remainingSeconds = Math.floor(timeInSeconds % 60);

  let resultText = "";

  if (timeInHours > 0) resultText += `${timeInHours} h `;
  if (timeInMinutes > 0) resultText += `${timeInMinutes} min `;
  if (remainingSeconds > 0) resultText += `${remainingSeconds} s`;

  return resultText || '-';
};
