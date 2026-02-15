import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-96 p-8 rounded-2xl shadow-md border border-gray-200"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Signup Form
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your full name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${
                errors.name
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-gray-400"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${
                errors.email
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-gray-400"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${
                errors.password
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-gray-400"
              }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gray-900 text-white rounded-lg
                     hover:bg-gray-700 transition duration-200 font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
