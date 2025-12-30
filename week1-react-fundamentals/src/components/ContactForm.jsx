import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded shadow space-y-2"
    >
      <h2 className="font-semibold">Contact Form</h2>

      <input
        className="w-full border p-2 rounded"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="w-full border p-2 rounded"
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button className="px-4 py-1 bg-black text-white rounded">Submit</button>
    </form>
  );
};

export default ContactForm;
