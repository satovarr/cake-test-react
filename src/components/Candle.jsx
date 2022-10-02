import "./Candle.css"

const Candle = ({ age, candleIndex, blown, size }) => {
  
  const position = -75 + candleIndex*245/age;

  return (
    <>
      <div
        className="candle"
        style={{
          left: position + "px",
          height: (size * 70) / 4 + "px",
          top: -130 - (size * 70) / 4 + "px",
        }}
      ></div>
      <div
        className="flame"
        style={{
          left: position - 2 + "px",
          display: blown ? "none" : "inline",
          top: -160 - (size * 70) / 4 + "px",
        }}
      ></div>
    </>
  );
}

export default Candle;