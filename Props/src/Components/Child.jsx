import React from 'react'
import Baby from './Baby'

function Child(props) {
  return (
    <div>
      <Baby isim={props.isim} soyisim={props.soyisim} yas={props.yas}  />
    </div>
  )
}

export default Child