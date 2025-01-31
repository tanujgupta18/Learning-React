const ButtonsContainer = () => {
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
      {buttonNames.map((buttonName) => (
        <button className="bg-gray-200 p-4 text-2xl font-medium text-gray-800 rounded-lg hover:bg-gray-300 transition transform hover:scale-105">
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
