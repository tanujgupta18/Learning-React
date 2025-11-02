import { useEffect, useState } from "react";

function App({ url = "https://dummyjson.com/products" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  const fetchProducts = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("An Error Occured");
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  const handleScrollPercentage = () => {
    const howMuch =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((howMuch / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md z-50">
        <div className="scroll-progress-track h-2 bg-gray-300 ">
          <div
            style={{ width: `${scrollPercent}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-200"
          ></div>
        </div>
      </div>

      <div className="container mx-auto p-4 space-y-6">
        {loading && (
          <div className="text-center py-6">
            <p className="text-xl text-gray-600">Loading...</p>
          </div>
        )}
        {errorMsg && (
          <div className="text-center py-6">
            <p className="text-xl text-red-600">{errorMsg}</p>
          </div>
        )}
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.thumbnail || "https://via.placeholder.com/400x300"}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold text-blue-600 mt-4">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-xl text-gray-600">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
