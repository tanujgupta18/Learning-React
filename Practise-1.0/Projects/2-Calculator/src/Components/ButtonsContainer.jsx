const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(buttonName)}
          className={`${
            buttonName === "C"
              ? "bg-red-500 text-white hover:bg-red-400"
              : buttonName === "="
              ? "bg-green-500 text-white hover:bg-green-400"
              : buttonName === "+" ||
                buttonName === "*" ||
                buttonName === "/" ||
                buttonName === "-"
              ? "bg-orange-500 text-white hover:bg-orange-400"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          } p-4 text-2xl font-medium rounded-lg transition transform hover:scale-105`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
