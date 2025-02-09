import React, { useEffect, useState } from 'react'

function Deneme() {

    const [count, setCount] = useState(0);

    const arttir = () => {
        setCount(count + 1)
    }
   
    function sifirla () {
        setCount(0)
    }

    return (
        <div>
            <p>Sayı: {count}</p>
            <button onClick={arttir}>Attır</button>
            <button onClick={() => { if(count> 0) {setCount(count-1)}}}>Azalt</button>
            <button onClick={sifirla}>Sıfırla</button>
        </div>
    )
}

export default Deneme