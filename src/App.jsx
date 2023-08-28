import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// Importando axios
import axios from "axios";

const App = () => {
  const [titleData, setTitleData] = useState("");
  //POST - Agrega un producto (url, body, headers)

  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://dummyjson.com/products/add",
  //       {
  //         title: titleData,
  //       },
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleNewProduct = () => {
    console.log(titleData)
    axios
      .post(
        "https://dummyjson.com/products/add",
        {
          title: titleData,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <MainLayout>
      <ItemListContainer greeting="Bienvenidos a mi tienda..." />
      <form>
        <input type="text" value={titleData} onChange={(e) => setTitleData(e.target.value)}/>
        <button onClick={handleNewProduct}>Crear producto</button>
      </form>
    </MainLayout>
  );
};

export default App;
