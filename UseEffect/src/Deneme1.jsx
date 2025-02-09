import { useState } from "react"

export default function Deneme1() {
    const [count, setCount] = useState(0)

    const handleClick = ()=>{
        setCount(prev => prev + 1)
    }
    /* Bİr önceki değere bağlı güncelleme yapılacaksa prev kullanımı daha güvenli olur. */


  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>arttır</button>
        <button onClick={() => {setCount(prev => prev - 1)}}>Azalt</button>
    </div>
  )
} 
