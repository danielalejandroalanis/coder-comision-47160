import {useState} from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  // Se desestructura del hook useState, el primer elemento es el valor del estado, el segundo es la funcion que permite modificar el estado
  //El primer valor, en este caso count, es el valor inicial del estado
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  console.log(count)

  return (

    <div>
      <NavBarComponent />
      //ItemListContainer.jsx
      {/* <ButtonComponent label="Boton principal" bsButtonType="primary" />
      
      <br />
      <ButtonComponent label="Boton secundario" bsButtonType="secondary"/>
      <ButtonComponent label="Boton terciario" bsButtonType="outline-info"/> */}

      <div>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <ButtonComponent label="Incrementar" bsButtonType="primary" onClickFunction={incrementar} />
        <ButtonComponent label="Decrementar" bsButtonType="secondary" onClickFunction={decrementar}/>
      </div>

    </div>
  )
}

export default App
