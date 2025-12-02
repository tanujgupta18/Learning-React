import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="bg-black text-white h-screen w-full">
      <Navbar theme={theme} />
      <Button />
    </div>
  );
};

export default App;
