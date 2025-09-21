import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);
  // console.log(bottles);

  const handleAddToCart = (bottle) => {
    console.log(bottle.name, "added to cart");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h3 className="text-2xl text-end font-semibold text-gray-900 mb-6">
        Available Design: {bottles.length}
      </h3>

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
