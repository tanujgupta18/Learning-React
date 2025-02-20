const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div
      id={id || "Modal"}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-all duration-300 ease-out"
    >
      <div className="bg-white w-96 rounded-xl shadow-2xl transform scale-95 transition-all duration-300 ease-in-out hover:scale-100">
        <div className="flex justify-between items-center p-5 border-b-2 bg-indigo-600 rounded-t-xl">
          <h2 className="text-2xl font-semibold text-white">
            {header ? header : "Header"}
          </h2>
          <span
            className="cursor-pointer text-white text-3xl hover:text-gray-200"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="p-6">
          {body ? (
            body
          ) : (
            <p className="text-gray-700">This is our Modal Body</p>
          )}
        </div>
        <div className="p-6 border-t-2">
          {footer ? (
            footer
          ) : (
            <h2 className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all duration-300">
              This is Footer
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
