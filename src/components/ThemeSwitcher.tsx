interface Props {
  handleOnChange: () => void;
}

const ThemeSwitcher = ({ handleOnChange }: Props) => {
  return (
    <input
      id="toggle"
      className="toggle"
      type="checkbox"
      onChange={handleOnChange}
    />
  );
};

export default ThemeSwitcher;
