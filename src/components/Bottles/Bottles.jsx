import React, { use } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  console.log(bottles);

  return (
    <div className="p-6">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Bottles: {bottles.length}
      </h3>

      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
