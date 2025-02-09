
import { useEffect, useState } from 'react'
import './App.css'
import Deneme from './Deneme';
import Deneme1 from './deneme1';
import Deneme2 from './Deneme2';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır")
  })

  /* Kullandığın her sayfada bir buton var ise her tıklandığında bu state çalışır. Ve yavaşlamana sebep olabilir. State değeri vererek yapılan her zaman daha iyi. */

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.")
  }, [])
 
  useEffect(() => {
    console.log("ilk render edildiğinde ve FİRSTNAME state değeri değiştiğide çalışır.")
  }, [firstName]),

  useEffect(() => {
    console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğide çalışır.")
  }, [lastName])

  // useEffect(() => {
  //   console.log("ilk render edildiğinde ve FİRSTNAME ve ya LASTNAME state değerlerinde değişiklik olduğunda çalışır.")
  // }, [firstName, lastName])

  /* Bir UseEffectin içinde birden fazla değer de yazılabilir. */
  return (
    <>
     <div>
      <button onClick={() => setFirstName("Büşra")}>Adı Değiştir</button>
     </div>
     <div>
     <button onClick={() => setLastName("Çelik")}>Soyismi Değiştir</button>
     </div>

     <Deneme />
     <Deneme1 />
     <Deneme2 />
    </>
  )
}

export default App
