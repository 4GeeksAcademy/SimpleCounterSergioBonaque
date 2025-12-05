import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";

function App({seconds,minutes,hours}) {

  return (
    <div>

      <SimpleCounter seconds ={seconds} minutes = {minutes} hours = {hours} />
    </div>
  );
}

export default App;