import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    //Inicializar la base de datos
    const db = getFirestore();

    //Inicializamos la coleccion
    const productItem = doc(db, "products", itemId);

    //Obtener los datos del documento
    getDoc(productItem).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
