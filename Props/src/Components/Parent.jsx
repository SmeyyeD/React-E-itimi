import React from 'react'
import Child from './Child'

function Parent(props) {
  return (
    <div>
     <Child isim={props.isim} soyisim={props.soyisim} yas={props.yas} />
    </div>
  )
}

export default Parent