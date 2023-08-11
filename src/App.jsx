//Components
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


//Styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TypeWriterComponent from "./components/TypeWriterComponent/TypeWriterComponent";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBarComponent />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a mi tienda..." />
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};

export default App;
