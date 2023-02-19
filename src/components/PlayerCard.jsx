import { useState } from "react";
import { FaBasketballBall } from "react-icons/fa";

const PlayerCard = ({ d }, ) => {
  console.log(d);
  const{img,name,statistics}=d
  const [on, setOn] = useState(true);


  const handleClick = () => {
    setOn(!on);
    setTimeout(() => setOn(on), 2000);
  };
  return (
    <div onClick={handleClick} className="card-ctn">
      <div key={statistics} className="card">
        {on ? (
          <div className="img-ctn">
            <img src={img} alt="player" />
          </div>
        ) : (
          <ul className="list">
            {statistics.map((e, i) => {
              return (
                <li key={i}>
                  <FaBasketballBall />
                  {e}
                </li>
              );
            })}
          </ul>
        )}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
