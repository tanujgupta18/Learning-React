import React from "react";
import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment Age
      </button>
    </div>
  );
};

export default UserProfile;
