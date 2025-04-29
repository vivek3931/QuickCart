import React, { useContext } from "react";
import products from "../data";
import { UserContext } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import Loader from "../Loader/Loader";

const Home = () => {
  const { setProductId } = useContext(UserContext);

  const productSpecification = (id) => {
    setProductId(id);
    toast.success("Product added successfully");
  };

  return (
    <>
      <Slider />

      <div className="flex  flex-wrap justify-center  gap-8 p-4">
        <ToastContainer />
        {products.map((data, idx) => {
          return (
            <Link to={`/product/${data.id}`}
              key={idx}
              className="w-64 bg-white rounded-lg shadow-md overflow-hidden  "
            >
              <img
                src={data.img}
                loading="lazy"
                alt="product"
                className="w-full h-[250px] object-cover cursor-pointer hover:scale-[1.1] duration-200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {data.name}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">4.5 ★</span>
                  <span className="text-sm text-gray-500 ml-2">(1234)</span>
                </div>
                <div className="mt-3">
                  <span className="text-xl font-bold text-gray-900">{`${data.offerPrice} $`}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {data.price}
                  </span>
                  <span className="text-sm text-green-600 ml-2">50% off</span>
                </div>
                <div className="flex justify-between mt-3">
                  <Link to={"cart"}>
                    <button
                      className="text-white rounded bg-orange-600 font-md  py-2 px-3 cursor-pointer"
                      onClick={() => productSpecification(data.id)}
                    >
                      Buy Now
                    </button>
                  </Link>
                  <button
                    className="text-white rounded bg-orange-600 font-md py-2 px-3 cursor-pointer"
                    onClick={() => productSpecification(data.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
        <hr className="text-[#e2e2e7] border-[1.5px]" />
      </div>
    </>
  );
};

export default Home;
