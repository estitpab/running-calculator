const Header = () => {
  const pictoList = ["🏃‍♀️", "🏃", "🏃‍♂️","🏆"];

  const getRandomPicto = (arr: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return (
    <h1 className="mb-8 title-gradient text-4xl sm:text-6xl">
      {getRandomPicto(pictoList)} Running Calculator
    </h1>
  );
};

export default Header;
