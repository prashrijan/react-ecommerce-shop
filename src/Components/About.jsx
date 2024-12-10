import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">About Us</h2>
          <p className="mt-2 text-gray-600">
            Welcome to <span className="font-bold text-blue-600">Shop</span>,
            your go-to destination for high-quality products and exceptional
            customer service. We offer a wide range of items, from everyday
            essentials to unique, one-of-a-kind treasures. At Shop, we are
            committed to providing you with an unparalleled shopping experience,
            both online and in-store.
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make shopping a pleasant, seamless experience,
              offering products that fit your needs and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
