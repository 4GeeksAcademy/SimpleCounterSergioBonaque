import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <SimpleCounter currentTime={seconds} />
    </div>
  );
}

export default App;