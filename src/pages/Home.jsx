import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

import { useProducts } from "../hooks/useProducts";

const Home = () => {
  //  const {products, loading} = useProducts();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    //Inicializar la base de datos
    const db = getFirestore();

    //Inicializamos la coleccion
    const productsCollection = collection(db, "products");

    //Obtener los datos de la coleccion
    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return <ItemListContainer productsData={products} />;
};

export default Home;
