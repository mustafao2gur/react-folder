import React from "react";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import { data } from "../helper/data";

const CardContainer = () => {

  const [filteredList, setFilteredList] = useState("");
const handelFilter =(e)=>{
  setFilteredList(e.target.value)
}

  return (
    <div className="player">
      <form className="form">
        <input
          type="text"
          placeholder="Search player..."
          onChange={handelFilter}
        />
      </form>

      <div className="dis">
        {data
          .filter((e) => {
            return e.name.toLowerCase().includes(filteredList.toLowerCase());
          })
          .map((d, i) => {
            return <PlayerCard d={d} i={i} />;
          })}
      </div>
    </div>
  );
};

export default CardContainer;
