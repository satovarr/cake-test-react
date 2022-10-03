import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./components/Cake.jsx";
import Cake from "./components/Cake.jsx";

/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. 

1. Show how old the child is!

Create a React App that renders a Birthday component that shows an age state in h1

*/

const App = () => {
  return (
    <div>
      <Birthday />
    </div>
  );
};

const Birthday = () => {
  let candles = [1, 2, 3, 4, 3, 4, 4];

  const [age] = useState(candles.length);

  const birthdayCakeCandles = (candles) => {
    const blownCandles = [];
    const maxHeight = Math.max(...candles);
    let amount = 0;

    candles.forEach((element) => {
      amount =
        element === maxHeight
          ? (blownCandles.push(true), amount + 1)
          : (blownCandles.push(false), amount);
    });
    return [blownCandles, amount];
  };

  const [blownCandles] = birthdayCakeCandles(candles);
  console.log(blownCandles);

  return (
    <div>
      <h1>{age}</h1>
      <Cake blownCandles={blownCandles} age={age} candles={candles} />
    </div>
  );
};
/*
2. Count how many candles are tallest!

Create the function birthdayCakeCandles that has the following parameters:
  Array[n] candles: the n candles' heights

And returns:
  tallestCandles = {
    blownCandles: array of booleans where True if that candle is one of the tallest and false if not,
    amount: the number of candles that are tallest
  }

*/

/*
3. Let's bring the cake!
Render the Cake component on App.
The child blew the candles and the tallest must be blown out. How would you render that?
*/

/*
4. Blow the candles!
Render the multiple candles inside Cake with the Candle component.
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
