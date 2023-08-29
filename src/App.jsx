import { useCount } from "./hooks/useCount";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {

  const { count, increment, decrement, reset } = useCount(0)


  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBar />
      </nav>
      <main className={styles.mainContainer}>
        {/* <div>{count}</div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Resetear</button> */}

        <ItemListContainer greeting="Bienvenidos a mi tienda..." />
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};



export default App;
