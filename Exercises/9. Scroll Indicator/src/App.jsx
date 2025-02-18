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
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="scroll-progress-track h-2 bg-gray-300 rounded-full">
          <div
            style={{ width: `${scrollPercent}%` }}
            className="h-full bg-blue-500 transition-all duration-200"
          ></div>
        </div>
      </div>

      <div className="container space-y-4 mt-8">
        {loading && (
          <p className="text-center text-xl text-gray-600">Loading...</p>
        )}
        {errorMsg && (
          <p className="text-center text-xl text-red-600">{errorMsg}</p>
        )}
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-xl font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
