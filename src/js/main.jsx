import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

function SimpleCounter(props) {
  return (<div className='bigCounter'>
    <div className='calendar'>
      <i className="fa-solid fa-clock"></i>
    </div>
    <div className='four'></div>
    <div className='three'></div>
    <div className='two'></div>
    <div className='one'></div>
  </div>);
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter />
  </React.StrictMode>,
)
