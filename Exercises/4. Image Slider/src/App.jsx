import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function App({ url = "https://picsum.photos/v2/list", limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return (
      <div className="text-center text-xl">Loading data! Please wait...</div>
    );
  }

  if (errorMessage !== null) {
    return (
      <div className="text-center text-xl text-red-500">
        Error occurred: {errorMessage}
      </div>
    );
  }

  const handleNext = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first image
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1); // Loop back to the last image
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 cursor-pointer hover:text-gray-900"
      />

      {/* Image Display */}
      {images && images.length > 0 ? (
        <img
          key={images[currentSlide].id}
          alt={images[currentSlide].download_url}
          src={images[currentSlide].download_url}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      ) : null}

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 cursor-pointer hover:text-gray-900"
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
