import PropTypes from "prop-types";
// import "./ItemListContainer.css";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting, numero, productData }) => {



  return <div className={styles.greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;

//Validación de tipos de datos con PropTypes
ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  numero: PropTypes.number,
  productData: PropTypes.array,
}

// //Tipo de datos de las propiedades de un producto
// const ProductType = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   displayName: PropTypes.string,
//   type: PropTypes.string,
//   primaryStrategy: PropTypes.string,
//   abbreviation: PropTypes.string,
// });

// //Valores por defecto de las propiedades
// ItemListContainer.defaultProps = {
//   numero: 0, 
//   productData: [ProductType]
// }




