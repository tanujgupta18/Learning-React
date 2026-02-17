import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthDemo = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) return;
    login(name);
    setName("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      {user ? (
        <>
          <h1 className="text-3xl font-bold">Welcome {user.name}</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default AuthDemo;
