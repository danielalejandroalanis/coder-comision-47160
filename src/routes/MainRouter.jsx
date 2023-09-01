import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemListContainer/ItemDetailContainer";

const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
