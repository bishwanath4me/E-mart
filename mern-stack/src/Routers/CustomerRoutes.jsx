import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../Page/HomePage/HomePage";
import Navigations from "../customer/Components/Navigation/Navigations";
import Cart from "./../customer/Components/Cart/Cart";
import Footer from "../customer/Components/Footer/Footer";
import Product from './../customer/Components/Product/Product';
import ProductDetails from './../customer/Components/ProductDetails/ProductDetails';
//import Checkout from './../customer/Components/Checkout/Checkout';
import Checkouts from "../customer/Components/Checkout/Checkouts";
import Order from "../customer/Components/Orders/Order";
import OrderDetails from "../customer/Components/Orders/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigations />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId/" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkouts />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Checkouts/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
