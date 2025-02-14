import { useEffect, useState } from "react";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHEXColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") generateRGBColor();
    else generateHEXColor();
  }, [typeOfColor]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full transition-all duration-500 ease-in-out"
      style={{ background: color }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-5">Random Color Generator</h1>
        <div className="flex gap-6 mb-8">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="bg-gray-800 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-700 focus:outline-none"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="bg-gray-800 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-700 focus:outline-none"
          >
            Create RGB Color
          </button>
        </div>
        <button
          onClick={typeOfColor === "hex" ? generateHEXColor : generateRGBColor}
          className="bg-green-600 text-white py-3 px-8 rounded-lg text-xl shadow-md transition duration-300 hover:bg-green-500 focus:outline-none"
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center text-white mt-12">
        <h3 className="text-2xl font-semibold">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 className="text-5xl font-extrabold">{color}</h1>
      </div>
    </div>
  );
}

export default App;
