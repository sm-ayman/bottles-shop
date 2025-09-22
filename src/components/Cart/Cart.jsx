import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">No items in cart</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((bottle) => (
            <li
              key={bottle.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-3 rounded-lg shadow-sm"
            >
              {/* Image */}
              <img
                src={bottle.img}
                alt={bottle.name}
                className="w-20 h-20 sm:w-12 sm:h-12 object-cover rounded mb-2 sm:mb-0"
              />

              {/* Name + Price */}
              <div className="flex-1 ml-0 sm:ml-3 mb-2 sm:mb-0">
                <h3 className="text-md font-semibold">{bottle.name}</h3>
                <p className="text-sm text-gray-500">Price: ${bottle.price}</p>
              </div>

              {/* Quantity */}
              <p className="text-sm text-gray-700 mb-2 sm:mb-0">
                Qty: {bottle.quantity || 1}
              </p>

              {/* Delete Button */}
              <button
                onClick={() => handleRemoveFromCart(bottle.id)}
                className="px-3 py-1 text-sm bg-red-500 rounded-md hover:bg-red-600 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
