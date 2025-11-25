import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  // using fetch
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };

  // using axios
  const getData2 = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    setData(res.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data using fetch</button>

      <button onClick={getData2}>Get Data using axios</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div key={idx}>
              <h4>Hi, {elem.author}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
