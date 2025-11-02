const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length ? (
        data.map((item, index) => (
          <li
            onClick={handleClick}
            key={index}
            className="px-4 py-2 cursor-pointer transition duration-200 ease-in-out hover:bg-blue-100"
          >
            {item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-500">No results found</li>
      )}
    </ul>
  );
};

export default Suggestions;
