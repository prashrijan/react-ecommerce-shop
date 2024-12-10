import "./App.css";
import { About, Contact, Home, NavBar, Cart } from "./Components/Index";

import datas from "./Data/Data";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartList, setCartList] = useState([]);

  const updateCart = (cartItem) => {
    const tempCartList = cartList;

    if (!cartItem.quantity) {
      cartItem.quantity = 1;
      tempCartList.push(cartItem);
    } else {
      cartItem.quantity++;
    }
    setCartList(tempCartList);
  };

  const removeProduct = (data) => {
    setCartList(
      cartList.filter((cartItem) => cartItem.productId !== data.productId)
    );
  };

  return (
    <>
      <NavBar />
      <div className="mt-28 px-10">
        <Routes>
          <Route
            path="/"
            element={<Home datas={datas} updateCart={updateCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart datas={cartList} removeProduct={removeProduct} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
