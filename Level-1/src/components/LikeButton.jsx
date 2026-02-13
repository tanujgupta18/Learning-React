import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-72 border border-gray-200">
        <button
          onClick={handleLike}
          className={`px-5 py-2 rounded-lg font-medium transition duration-200 
            ${
              liked
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <p className="mt-4 text-gray-700 font-semibold">{count} Likes</p>
      </div>
    </div>
  );
};

export default LikeButton;
