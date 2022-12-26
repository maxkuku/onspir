import React from "react";
import './Line.css'

const Line = (props) => {
    const sub = props.persent -15; 
    return (
    
          <div className="progress" style={{background: `linear-gradient(90deg, rgba(38,109,62,1) 0%, rgba(38,109,62,1) ${sub}%, rgba(38,109,62,0) ${props.persent}%)`}}><small>{props.persent}%</small></div>
       
    )
}

export default Line;