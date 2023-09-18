import React from "react";
import styles from './FormComponent.module.css'
const FormComponent = () => {
  return (
    <div className={styles.formContainer}>
      <span>Crear productos</span>
      <form className={styles.formulario}>
        <input type="text"   placeholder="Titulo" />
        <input type="text"   placeholder="Descripcion" />
        <input type="number" placeholder="Precio" />
        <input type="text"   placeholder="Url imagen" />
        <input type="number" placeholder="Stock" />
      </form>
      <input type="submit" />
    </div>
  );
};

export default FormComponent;
