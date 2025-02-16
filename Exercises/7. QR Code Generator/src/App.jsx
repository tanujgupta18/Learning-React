import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQRCode(input);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          QR Code Generator
        </h1>
        <div className="space-y-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your value here"
          />
          <button
            disabled={input.trim() === ""}
            onClick={handleGenerateQRCode}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Generate
          </button>
        </div>
        {qrCode && (
          <div className="mt-6 flex justify-center">
            <QRCode id="qr-code-value" value={qrCode} size={300} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
