import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="bg-black w-24 h-1 rounded"></span>
        <p className="max-w-[650px] text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a natus
          vel ut odit. Nobis architecto maxime necessitatibus repudiandae porro
          incidunt reprehenderit odit ab quidem consequuntur. Perferendis natus
          minima earum?
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10 ">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
