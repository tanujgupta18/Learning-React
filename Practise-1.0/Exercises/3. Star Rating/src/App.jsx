import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleMouseEnter = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };
  return (
    <div className="flex justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onmouseleave={handleMouseLeave}
            size={40}
            color={hover >= index || rating >= index ? "gold" : "gray"}
          />
        );
      })}
    </div>
  );
}

export default App;
