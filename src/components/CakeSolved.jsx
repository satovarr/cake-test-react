import Candle from "./Candle.jsx";
import "./Cake.css";

const Cake = ({ blownCandles, age, candles }) => {
  const renderCandles = () =>
    blownCandles.map((candle, i) => (
      <Candle
        key={i}
        blown={candle}
        age={age}
        candleIndex={i}
        size={candles[i]}
      />
    ));

  return (
    <div className="birthday-cake">
      <div className="holder"></div>
      <div className="shadow"></div>
      <div className="cake">
        <div className="chocolate"></div>
      </div>
      <div>
        {
          // render the dandles here
          renderCandles()
        }
      </div>
    </div>
  );
};

export default Cake;
