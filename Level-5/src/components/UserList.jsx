import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-red-500 text-xl font-semibold">Error: {error}</h2>
      </div>
    );

  if (users.length === 0)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600">No Users Found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Users List</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {users.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.email}</p>
              <p className="text-sm text-gray-500 mt-2">{item.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
