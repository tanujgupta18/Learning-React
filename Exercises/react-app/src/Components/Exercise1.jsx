{
  /*You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card Use this API: https://jsonplaceholder.typicode.com/posts

  Hint: Create a state for the data which will be fetched using the Json Placeholder API Inside useEffect, use fetch to populate that state and then use map to render the cards from that state. */
}

import React, { useEffect, useState } from "react";

const Exercise1 = () => {
  const [cards, setcards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcards(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise1;
