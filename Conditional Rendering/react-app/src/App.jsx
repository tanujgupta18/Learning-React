import React from "react";
import UserStatus from "./Components/UserStatus";
import UserGreeting from "./Components/UserGreeting";
import Notification from "./Components/Notification";

const App = () => {
  return (
    <div>
      <UserStatus /> {/* using if-else */}
      <UserGreeting /> {/* Using Ternary Operator */}
      <Notification /> {/* Using Logical AND (&&) */}
    </div>
  );
};

export default App;
