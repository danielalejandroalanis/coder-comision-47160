//Components
import { useEffect, useRef, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import MainLayout from "./layout/MainLayout";
import PersonaComponent from "./components/PersonaComponent/PersonaComponent";

//Promesas
const flag = false;
const promesa = new Promise((resolve, reject) => {
  if (flag) {
    resolve("Tarea resuelta");
  } else {
    reject("Tarea rechazada");
  }
});

const App = () => {
  const [state, setState] = useState(false);
  const [stateDos, setStateDos] = useState(false);
  const [arrObj, setArrObj] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      edad: 30,
    },
    {
      id: 2,
      nombre: "Pepito",
      apellido: "Perez",
      edad: 30,
    },
    {
      id: 3,
      nombre: "Maria",
      apellido: "Perez",
      edad: 30,
    },
  ]);
  const inputName = useRef(null);
  const inputAge = useRef(null);
  const itemList = useRef(null);

  // const obj = {
  //   nombre: "Juan",
  //   apellido: "Perez",
  //   edad: 30,
  // }

  // console.table(obj)
  // console.debug("debug");

  //MAP
  // const arrObj = [
  //   {
  //     id: 1,
  //     nombre: "Juan",
  //     apellido: "Perez",
  //     edad: 30,
  //   },
  //   {
  //     id: 2,
  //     nombre: "Pepito",
  //     apellido: "Perez",
  //     edad: 30,
  //   },
  //   {
  //     id: 3,
  //     nombre: "Maria",
  //     apellido: "Perez",
  //     edad: 30,
  //   },
  // ];

  // console.log(arrObj.filter(item => item.nombre === "Maria"))

  arrObj.map((itemPersona) => {
    console.log(itemPersona.nombre);
  });

  useEffect(() => {
    promesa
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        console.log("Se ejecuta siempre");
      });
  }, []);

  useEffect(() => {
    console.log("useeffect con dependencias vacias");
    // inputName.current.focus();
  }, []);

  useEffect(() => {
    console.log("useeffect con el estado como dependencia");

    return () => {
      console.log("componente desmontado");
    };
  }, [state, stateDos]);

  useEffect(() => {
    console.log("useeffect sin dependencias");
    // inputName.current.focus();
  });

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
      <div>
        {
          // arrObj.map((itemPersona, index) => {
          //   return <PersonaComponent key={index} itemPersona={itemPersona}/>
          // })
          arrObj.map((itemPersona) => {
            return (
              <PersonaComponent
                key={itemPersona.id}
                itemPersona={itemPersona}
              />
            );
          })
        }
      </div>
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
