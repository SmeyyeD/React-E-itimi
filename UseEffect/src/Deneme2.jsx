import React, { useEffect, useState } from 'react'

function Deneme2() {
    const [count, setCount] = useState(0);
    const [sayac, setSayac] = useState(0);

    useEffect(() => {

        console.log("Component render edildi")
    
    }, [count, sayac])
    
    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    const handleBip = () => {
        setSayac(prev => prev + 1)
    }

  return (
    <div>
        <p>Sayac: {count}</p>
        <p>Sayac2: {sayac}</p>
        <button onClick={handleClick}> Arttır</button>
        <button onClick={handleBip}> Sayac</button>
    </div>
  )
}

export default Deneme2