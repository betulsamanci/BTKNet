import { useState } from "react";
import data from "./data";


function App() {
  console.log(data)
  const [names, setNames] = useState(data);

  //Arrow(ok)
  const sayHello = () => {
    setNames([]);
    console.log(names);
  };

  const Addnumber = (num) => {
    setNames([...names, num]); //rest operator(...)
    console.log(names);
  };

  const showname = (name) => {
    setNames(names.filter((num) => num !== name));
  };

  return (
    <>
      <div>Merhaba React</div>

      {names.map((num, index) => (
        <div key={index}>
          {num}
          <button onClick={() => showname(num)}>Remove</button>
        </div>
      ))}

      <button onClick={() => sayHello()}>clear all</button>
      <button onClick={() => Addnumber("BET")}>Add</button>

      <div>{names.length}</div>
    </>
  );
}

export default App;
