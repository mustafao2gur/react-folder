import React from 'react'
import PlayerCard from './PlayerCard'

import {data} from "../helper/data" 


const CardContainer = () => {

  return (
    <div className='res'>
      <form className="form">
        <input type="text" placeholder="Search player..." />
      </form>
      <div className="p-card">
     
        {data.map((e, i) => {
          return (
            <PlayerCard data={e} key={i} />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer