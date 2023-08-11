// import "./ItemListContainer.css";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return <div className={styles.greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;
