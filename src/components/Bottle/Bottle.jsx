import React from "react";

const Bottle = ({ bottle }) => {
  console.log(bottle);
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Bottle Image */}
      <img
        src={bottle.img}
        alt={bottle.name}
        className="w-32 h-32 object-cover rounded-full mb-4 hover:scale-200 duration-300 cursor-zoom-in"
      />

      {/* Bottle Name */}
      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        {bottle.name}
      </h2>

      {/* Seller / Brand */}
      <p className="text-sm text-gray-500 mb-2">Seller: {bottle.brand}</p>

      {/* Price */}
      <p className="text-md font-medium text-gray-800 mb-1">
        Price: ${bottle.price}
      </p>

      {/* Quantity / Capacity */}
      <p className="text-sm text-gray-600">Capacity: {bottle.capacity}</p>
    </div>
  );
};

export default Bottle;
