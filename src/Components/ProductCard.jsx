import React from "react";

const ProductCard = ({ data, updateCart }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={data.imgUrl}
          alt="product image"
          loading="lazy"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {data.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1.5 rounded">
            Ratings: {data.ratings}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${data.price}
          </span>
          <button
            onClick={() => {
              updateCart(data);
            }}
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
