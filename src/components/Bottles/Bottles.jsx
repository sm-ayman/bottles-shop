import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToStoredCart } from "../../utilities/localstorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);
  // console.log(bottles);

  const handleAddToCart = (bottle) => {
    // console.log(bottle.name, "added to cart");
    const updatedCart = [...cart, bottle];
    setCart(updatedCart);

    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h3 className="text-2xl text-end font-semibold text-gray-900 mb-6">
        Available Design: {bottles.length}
      </h3>
      {/* Cart */}
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        In Cart: {cart.length}
      </p>
      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
