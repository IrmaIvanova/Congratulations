import React from 'react';
import './Content.css'



function Rewards(props){
    console.log(props.data);
  return (
    <div className="Rewards">
                    <b> Награда: </b> 
             <div >
                 {props.data.map((item, key) =>
             <div><span>{item.prize}</span>{item.name}</div>
              )}
              </div>
    </div>
  );
}

export default Rewards;