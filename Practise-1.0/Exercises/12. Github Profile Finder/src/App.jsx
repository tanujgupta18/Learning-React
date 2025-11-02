import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [userName, setuserName] = useState("tanujgupta18");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setuserName("");
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <h1 className="text-xl text-center mt-10">
        Loading data! Please wait...
      </h1>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            name="search-by-userName"
            placeholder="Search Github username..."
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default App;
