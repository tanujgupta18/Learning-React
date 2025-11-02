import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl font-semibold text-gray-700">Likes: {likes}</p>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Like the video 👍
      </button>
    </div>
  );
};

export default LikeButton;
