import React, { useState } from "react";

import { addDoc, collection, getFirestore } from "firebase/firestore";

import { Button } from "react-bootstrap";

import styles from "./FormComponent.module.css";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmitProduct = (e) => {
    const newProduct = {
      title,
      description,
      price,
      stock,
      thumbnail,
      category,
    };

    const db = getFirestore();
    const addProductCollection = collection(db, "products");

    addDoc(addProductCollection, newProduct).then(({ id }) => console.log(id));
  };

  return (
    <div className={styles.formContainer}>
      <span>Crear productos</span>
      <form className={styles.formulario}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url imagen"
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
      </form>
      <Button onClick={handleSubmitProduct}>Crear Item</Button>
    </div>
  );
};

export default FormComponent;
