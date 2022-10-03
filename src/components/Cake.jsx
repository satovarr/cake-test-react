import Candle from './Candle.jsx';
import "./Cake.css";


const Cake = () => {

  return (
    <div className="birthday-cake">
      <div className="holder"></div>
      <div className="shadow"></div>
      <div className="cake">
        <div className="chocolate"></div>
      </div>
      <div>
        {// render the Candles here
        }
      </div>
    </div>
  );
  

}

export default Cake;