import { useState } from 'react'
import './App.css'
import Parent from './Components/Parent';

function App() {
  const [isim, setİsim] = useState("sümeyye");
  const [soyisim, setSoyisim] = useState("danışmaz");
  const [yas, setYas] = useState("23");
  
  
  return (
    <>
      <Parent isim={isim} soyisim={soyisim} yas={yas} />
    </>
  )
}

export default App
