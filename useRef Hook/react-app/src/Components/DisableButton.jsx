import React, { useRef, useState } from "react";

function DisableButton() {
  const buttonRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button ref={buttonRef} onClick={handleClick} disabled={isDisabled}>
      {isDisabled ? "I am Disabled" : "Click to Disable Me"}
    </button>
  );
}

export default DisableButton;
