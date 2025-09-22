import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToStoredCart, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);
  // console.log(bottles);

  // useEffect - to getStoredCart -- we dont use it now -- alterative of promise
  useEffect(() => {
    const storedCartIds = getStoredCart();
    // console.log(storedCartIds, "bottles-", bottles);

    const storedCart = [];

    for (const id of storedCartIds) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        // console.log(cartBottle);
        storedCart.push(cartBottle);
      }
    }
    console.log(storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log(bottle.name, "added to cart");
    const updatedCart = [...cart, bottle];
    setCart(updatedCart);

    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // console.log("remove", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6  p-4 rounded-lg  border border-gray-200 flex justify-between items-center">
        <span>Available Design: {bottles.length}</span>
        <span>🛒 Cart Items: {cart.length}</span>
      </h3>

      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
