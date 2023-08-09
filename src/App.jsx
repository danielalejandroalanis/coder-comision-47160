import "./App.css"

//CSS Modules
import styles from './Estilos.module.css';

const App = () => {
// CSS-in-JS
// const divStyles = {
//     color: 'red',
//     backgroundColor: 'blue',
//     fontSize: '20px',
//     paddingTop: '10px',

//   }


  const name = 'Daniel';

  var isOnline = true;
  
  

  return (
    // <div style={divStyles}>
    //   Hola {name}!
    // </div>
    // <div style={{
    //   color: 'red',
    //   backgroundColor: 'blue',
    //   fontSize: '20px',
    //   paddingTop: '10px',
    // }}>
    //   Hola {name}!
    // </div>
    // <div className="aplicacion">
    //   Hola {name}!
    // </div>
    <div className={ isOnline ? styles.online : styles.offline}>
      Hola {name}!
    </div>
  )
}

export default App
