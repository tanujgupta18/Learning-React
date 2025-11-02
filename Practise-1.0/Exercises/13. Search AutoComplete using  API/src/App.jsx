import { useEffect, useState } from "react";
import Suggestions from "./components/suggestions";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="container mx-auto p-4 w-full max-w-lg relative">
      {loading ? (
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mx-auto"></div>
        </div>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-300"
        />
      )}

      {showDropdown && (
        <div className="absolute bg-white w-full border border-gray-300 rounded-lg shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
          <Suggestions handleClick={handleClick} data={filteredUsers} />
        </div>
      )}
    </div>
  );
}

export default App;
