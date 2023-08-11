import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartWidget.module.scss";
const CartWidget = () => {
  return (
    <div className={styles.cartContainer}>
      <FontAwesomeIcon icon={faCartShopping} />
      <strong> 0 </strong>
    </div>
  );
};

export default CartWidget;
