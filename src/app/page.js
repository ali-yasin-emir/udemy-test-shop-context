"use client";

import CartContextProvider from "@/store/shopping-cart-context";

import Header from "./components/Header";
import Shop from "./components/Shop";


const Home = () => {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
};

export default Home;
