import React from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import LikeButton from "./components/LikeButton";

const App = () => {
  return (
    <div>
      <Counter />
      <Toggle />
      <LikeButton />
    </div>
  );
};

export default App;
