import React, { useState } from 'react'



const PersonaComponent = ({itemPersona}) => {
    const [contador, setContador] = useState(0)

    console.log(contador)
    console.log(itemPersona)
  return (

    <div>
        <ul>
            <li>{itemPersona.nombre}</li>
            <li>{itemPersona.apellido}</li>
            <li>{itemPersona.edad}</li>
            <button onClick={() => setContador(contador + 1)}>Conta +1</button>
        </ul>
    </div>
  )
}

export default PersonaComponent