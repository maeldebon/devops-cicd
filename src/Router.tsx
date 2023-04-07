import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./views/Products";
import Product from "./views/Product";
import Cart from "./views/Cart";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
