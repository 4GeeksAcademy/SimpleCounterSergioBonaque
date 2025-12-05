// SimpleCounter.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function SimpleCounter({ seconds,minutes, hours }) {
  
  return (
    <div className="div-padre">
      <h1>
        <FontAwesomeIcon icon={faClock} className="counter-icon" />
        <span className="contador-formateado">{hours} : {minutes} : {seconds}</span>
      </h1>
    </div>
  );
}

export default SimpleCounter;