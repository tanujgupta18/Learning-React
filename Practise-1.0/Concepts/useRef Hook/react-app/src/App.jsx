import React from "react";
import Counter from "./Components/Counter";
import StopWatch from "./Components/StopWatch";
import AutoFocusInput from "./Components/AutoFocusInput";
import ClickCounter from "./Components/ClickCounter";
import DisableButton from "./Components/DisableButton";
import PreviousValueTracker from "./Components/PreviousValueTracker";

const App = () => {
  return (
    <div className="m-10">
      {/* <Counter /> */}
      {/* <StopWatch /> */}
      {/* <AutoFocusInput /> */}
      {/* <ClickCounter /> */}
      {/* <DisableButton /> */}
      <PreviousValueTracker />
    </div>
  );
};

export default App;
