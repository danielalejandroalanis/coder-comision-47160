import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    //Inicializar la base de datos
    const db = getFirestore();

    //Inicializamos la coleccion
    const dataCollection = collection(db, collectionName);

    //Obtener los datos de la coleccion
    getDocs(dataCollection)
      .then((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
