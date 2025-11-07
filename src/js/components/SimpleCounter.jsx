import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function SimpleCounter() {

    const [contador, setContador] = useState(0) // variable, funcion modifca la variable y entre los parentesis el valor inicial de mi variable
                        

    // useEffect ejecuta algo nada mas iniciando(levantando) el componente 
    useEffect(() => {
        const interval = setInterval(() => {
            setContador((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <h1>
                <FontAwesomeIcon icon={faClock} className="counter-icon" /> {contador}</h1>
        </div>
    )
}

export default SimpleCounter
