import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((bottle) => (
            <li
              key={bottle.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
            >
              {/* Image */}
              <img
                src={bottle.img}
                alt={bottle.name}
                className="w-12 h-12 object-cover rounded"
              />

              {/* Name + Price */}
              <div className="flex-1 ml-3">
                <h3 className="text-md font-semibold">{bottle.name}</h3>
                <p className="text-sm text-gray-500">Price: ${bottle.price}</p>
              </div>

              {/* Quantity */}
              <p className="text-sm text-gray-700 mr-4">
                Qty: {bottle.quantity || 1}
              </p>

              {/* Delete Btn */}
              <button
                onClick={() => handleRemoveFromCart(bottle.id)}
                className="px-3 py-1 text-sm bg-red-500  rounded-md hover:bg-red-600 transition"
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
