import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      } else if (count > 0) {
        setError("No more products available.");
      }
    } catch (e) {
      setError("An error occurred while fetching data.");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">
        Product List
      </h1>

      {loading && (
        <div className="text-center text-lg text-gray-700">
          Loading Data... Please Wait
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 font-semibold">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500">Brand: {item.brand}</p>
              <p className="text-gray-600 font-semibold text-lg mt-1">
                ${item.price}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="flex items-center text-black font-semibold text-sm">
                  ⭐ {item.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({item.stock} in stock)
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCount(count + 1)}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
