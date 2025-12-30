import React from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        React Week 1 Fundamentals
      </h1>

      <Card title="React" description="UI Library" />
      <Counter />
      <Toggle />
      <ContactForm />
    </div>
  );
};

export default App;
