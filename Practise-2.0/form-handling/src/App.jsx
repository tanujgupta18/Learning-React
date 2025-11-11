import React, { useState } from "react";

const App = () => {
  // Two Way Binding

  const [title, setTitle] = useState("Aman");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", title);

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
