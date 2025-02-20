import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
      <button
        onClick={handleToggleModalPopup}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customised Body</div>} />
      )}
    </div>
  );
}

export default App;
