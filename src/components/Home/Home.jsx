import React, { useContext, useState } from "react";
import products from "../data";
import { UserContext } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import Slider from "../Slider/Slider";

const Home = () => {
  const { setProductId } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 10;

  const lastProduct = currentPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;

  const currentIndexPage = products.slice(firstProduct, lastProduct);

  const totalPage = Math.ceil(products.length / productPerPage);

  const nextPage = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const productSpecification = (id) => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    setProductId(id);
    toast.success("Product added successfully");
  };

  return (
    <>
      <Slider />
      <h1 className="flex items-center justify-center font-bold text-3xl mb-4 text-gray-800 tracking-wide">
      Mobile Phones
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-6 min-h-screen bg-gray-50">
      <ToastContainer />
      {currentIndexPage.map((data, idx) => (
        <NavLink
        to={`/product/${data.id}`}
        key={idx}
        className="w-72 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
        >
        <div className="relative group py-2">
          <img
          src={data.img}
          loading="lazy"
          alt="product"
          className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
         { `${Math.round((data.price - data.offerPrice) / data.price * 100)}% OFF`}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
          {data.name}
          </h3>
          <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-lg">★★★★☆</span>
          <span className="text-sm text-gray-500 ml-2">(1,234)</span>
          </div>
          <div className="mt-3 space-y-1">
          <span className="text-2xl font-bold text-gray-900">${data.offerPrice}</span>
          <span className="text-sm text-gray-500 line-through ml-3">
            ${data.price}
          </span>
          </div>
          <div className="flex justify-between mt-5 gap-3">
          <Link to="cart" className="flex-1">
            <button
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg py-2.5 px-4 transition-all duration-200 transform hover:scale-105"
            onClick={() => productSpecification(data.id)}
            >
            Buy Now
            </button>
          </Link>
          <button
            className="flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium rounded-lg py-2.5 px-4 transition-all duration-200 transform hover:scale-105"
            onClick={() => productSpecification(data.id)}
          >
            Add to Cart
          </button>
          </div>
        </div>
        </NavLink>
      ))}
      <div className="w-full flex justify-center items-center gap-6 mt-8">
        <button 
        onClick={prevPage} 
        disabled={currentPage === 1}
        className="px-6 py-2.5 bg-orange-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-all duration-200 cursor-pointer font-medium"
        >
        Previous
        </button>
        <span className="text-lg font-medium  bg-[#a4a4a439] px-3.5 py-1 rounded-full duration-200 transition">{currentPage}</span>
        <button 
        onClick={nextPage} 
        disabled={currentPage === totalPage}
        className="px-6 py-2.5 bg-orange-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-all duration-200 cursor-pointer font-medium"
        >
        Next
        </button>
      </div>
      <hr className="w-full border-gray-200 my-10" />
      </div>
    </>
  );
};

export default Home;
