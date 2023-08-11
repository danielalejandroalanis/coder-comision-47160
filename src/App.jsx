//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBar />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a mi tienda..." />
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};

export default App;
