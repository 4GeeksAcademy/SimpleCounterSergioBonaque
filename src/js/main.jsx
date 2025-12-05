import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


let seconds = 0
let minutes = 0
let hours = 0


setInterval(() => {

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home seconds= {seconds} minutes = {minutes} hours = {hours}/> 
  </React.StrictMode>,
)

  seconds++
  if (seconds >= 60) {
    minutes++
    seconds = 0
  }
  if (minutes >= 60) {
    hours++
    minutes = 0

  }
  

}, 1000);



