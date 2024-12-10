import React from "react";
import ProductCard from "./ProductCard";

const Home = ({ datas, updateCart }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {datas.map((data, index) => {
          return (
            <ProductCard key={index} data={data} updateCart={updateCart} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
