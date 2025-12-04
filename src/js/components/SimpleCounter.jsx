// SimpleCounter.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function SimpleCounter({ currentTime }) {
  
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="div-padre">
      <h1>
        <FontAwesomeIcon icon={faClock} className="counter-icon" />
        <span className="contador-formateado">{formatTime(currentTime)}</span>
      </h1>
    </div>
  );
}

export default SimpleCounter;