import React, { useRef } from "react";

function DisableButton() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.disabled = true; // Disable button after first click
  };

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Click to Disable Me
    </button>
  );
}

export default DisableButton;
