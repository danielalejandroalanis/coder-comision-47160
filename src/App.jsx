//Components
import { useEffect, useRef, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import MainLayout from "./layout/MainLayout";

const App = () => {
  const [state, setState]= useState(false);
  const [stateDos, setStateDos]= useState(false);
  const inputName = useRef(null);
  const inputAge = useRef(null);
  const itemList = useRef(null);

  useEffect(() => {

    console.log("useeffect con dependencias vacias");
    // inputName.current.focus();
  }, [])

  useEffect(() => {

    console.log("useeffect con el estado como dependencia");
    
    return () => { 
      console.log("componente desmontado");
    }

  }, [state, stateDos])

  useEffect(() => {

    console.log("useeffect sin dependencias");
    // inputName.current.focus();
  })


  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   inputName.current.focus();
  //   console.log(inputName.current.value);
  //   console.log(inputAge.current.onFocus);
  //   console.log(inputName)
  //   console.log("Formulario enviado");
  //   console.log(itemList)
  // };

  return (
    //HOC High Order Components - es un patron de diseño
    <div>
      {state}
      <button onClick={() => setState(!state)}>Click me!</button>
      <button onClick={() => setStateDos(!stateDos)}>Saludo</button>
    </div>

    // <MainLayout> 
    //   <ItemListContainer greeting="Bienvenidos a mi tienda..."/>
    //   <form onSubmit={handleOnSubmit}>
    //     <input ref={inputName} type="text" placeholder="Ingrese su nombre" />
    //     <input ref={inputAge} type="number" placeholder="Ingrese su edad"/>
    //     <input type="submit" value="Enviar" />
    //   </form>
    // </MainLayout>
  );
};

export default App;