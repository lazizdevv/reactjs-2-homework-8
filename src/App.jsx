import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateProduct } from "./pages/create-page";
import { EditProduct } from "./pages/edit-page";
import { SinglePage } from "./pages/single-page";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/single-product/:id" element={<SinglePage/>} />
      </Routes>
    </>
  );
}

export default App;
