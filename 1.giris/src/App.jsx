import './App.css'

function App() {
  // Javascript kodları yazılır. 
  let a = 15;
  const firstName = "Sümeyye"
  let vize1 = 40;
  let vize2 = 80;

  let sonuc = 70;

  let isimler = [
    "Pinar",
    "Elif",
    "Huri"
  ]

  return (
    <div>

      <p>A değişkenin değeri = {a}</p>

      <p>Müşterinin adı: {firstName} </p>


      <p>Ortalama: {(vize1 + vize2) / 2} </p>

      {sonuc < 50 ? <p>Ehliyet alamazsın</p> : <p>Ehliyet alabilirsin</p>}

      {
        isimler.map((isim) => (
          <div>{isim}</div>
        ))
      }

    </div>
  )
}

export default App
