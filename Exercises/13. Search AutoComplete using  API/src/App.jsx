import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData = users
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
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
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <input
        value={searchParam}
        type="text"
        name="search-users"
        placeholder="Search Users here... "
        onChange={handleChange}
      />
      {showDropDown && (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
