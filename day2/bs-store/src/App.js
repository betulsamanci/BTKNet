import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  //Arrow(ok)

  const sayHello = () => {
    setNumbers([]);
    console.log(numbers);
  };

  const shownumber = (number) => {
    setNumbers(numbers.filter((num) => num !== number));
  };

  return (
    <>
      <div>Merhaba React</div>

      {numbers.map((num, index) => (
        <div key={index}>
          {num}
          <button onClick={() => shownumber(num)}>button</button>
        </div>
      ))}

      <button onClick={() => sayHello()}>clear all</button>
      <div>
        {numbers.length}
      </div>
    </>
  );
}

export default App;
