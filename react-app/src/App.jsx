function App() {
  let foodItems = ["Dal", "Vegetable", "Roti", "Salad", "Milk"];
  // let foodItems = [];

  return (
    <div className="m-10">
      <h1>Healthy Food</h1>
      {foodItems.length === 0 ? <h3>I am Still hungry</h3> : null}
      <ul className="list-item">
        {foodItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
