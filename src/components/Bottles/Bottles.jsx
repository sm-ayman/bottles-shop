import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToStoredCart,
  getStoredCart,
  removeFromCart,
} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  useEffect(() => {
    const storedCartIds = getStoredCart();
    const storedCart = [];

    for (const id of storedCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) storedCart.push(cartBottle);
    }

    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const updatedCart = [...cart, bottle];
    setCart(updatedCart);
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header: Available Designs + Cart Count */}
      <h3 className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-md mb-6">
        <span className="text-lg sm:text-xl font-semibold text-gray-900">
          Available Design: {bottles.length}
        </span>
        <span className="text-lg sm:text-xl font-semibold text-gray-900 mt-2 sm:mt-0">
          🛒 Cart Items: {cart.length}
        </span>
      </h3>

      {/* Cart */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />

      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10">
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
