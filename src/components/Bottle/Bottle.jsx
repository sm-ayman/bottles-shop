import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col  transition transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Bottle Image */}
      <img
        src={bottle.img}
        alt={bottle.name}
        className="mx-auto w-32 h-32 object-cover rounded-full mb-4 hover:scale-150 duration-300 cursor-zoom-in"
      />

      {/* Bottle Name */}
      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        {bottle.name}
      </h2>

      {/* Seller / Brand */}
      <p className="text-sm text-gray-500 mb-2">Seller: {bottle.seller}</p>

      {/* Price */}
      <p className="text-md font-medium text-gray-800 mb-1">
        Price: ${bottle.price}
      </p>

      {/* Quantity / Capacity */}
      <p className="text-sm text-gray-600 mb-3">Capacity: {bottle.capacity}</p>

      {/* Buy Now Button */}
      <button
        onClick={() => handleAddToCart(bottle)}
        className=" px-4 py-2 rounded-full shadow  hover:scale-105 transition duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Bottle;
