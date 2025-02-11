import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-12 p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter App</h1>
        <div className="text-xl text-gray-700 mb-6">
          <div className="mb-4">
            <button
              onClick={() => dispatch(decrement())}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              -
            </button>
            <span className="mx-4 text-2xl">{count}</span>
            <button
              onClick={() => dispatch(increment())}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(multiply())}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Multiply
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
