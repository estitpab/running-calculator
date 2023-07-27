interface Props {
  handleOnClick: () => void;
  actionType: "inc" | "dec";
}

const IncDecButton = ({ handleOnClick, actionType }: Props) => {
const className = 'opacity-20 font-light text-4xl';

  switch (actionType) {
    case "dec":
      return <button className={className} onClick={handleOnClick}> - </button>;
      break;
    default:
      return <button className={className} onClick={handleOnClick}> + </button>;
  }
};

export default IncDecButton;
