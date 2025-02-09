import { useState } from 'react'
import './App.css'

function App() {

/* 1 */  const [firstName, setFirstName] = useState('Sümeyye');
/* 2 */ const [lastName, setLastName] = useState('Danışmaz');
/* 3 */ const [names, setNames] = useState(["Sümeyye", "Büşra", "Furkan", "Ali"])
/* 4 */  const [userInfo, setUserInfo] = useState({ username: "smeyyed", password: "12121" })

  // const handleChange = () => {
  //   setFirstName("Büşra")
  // }


  /* Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir. */

  const [ count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if(count > 0) {
      setCount(count - 1)
    }
    
  }
  return (
    <>
     <div>{firstName} {lastName}</div>
      <div>

        <button onClick={() => { setFirstName("Büşra") }}>İsmi Değiştir</button>

        {/* <div><button onClick={handleChange}>İsmi Değiştir</button></div>
          YA DA ŞÖYLE YAPILABİLİR. HandleChange kullanılarak da yukarıda firstName içine değişkeni atayıp burada yazdırabilir.  */}

        {/* {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
        Bu şekilde de bir array listesi kullanıp map ile sırayla dönebiliriz. */}
{/* 
        {userInfo.username} {userInfo.password} */}

        <div>{count}</div>
        <div><button onClick={arttir}>Arttır</button></div>
        <div><button onClick={azalt}>Azalt</button></div>
      </div>
    </>
  )
}

export default App
