import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data";
import { UserContext } from "../../Context/Context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setProductId } = useContext(UserContext);

  const productSpecification = (id) => {
    setProductId(id);
    toast.success("Product added successfully");
  };

  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find((spec) => spec.id === productId);
    console.log(foundProduct)
    console.log("The product is :", foundProduct);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="md:w-1/2 relative group">
          {product.img && (
            <div className="overflow-hidden px-2 py-2">
              <img
                src={product.img}
                alt={product.name || "Product"}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>
        <div className="md:w-1/2 p-8 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            {product.name}
          </h2>
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-bold text-orange-600">
              ${product.offerPrice}
            </p>
            <p className="text-lg text-gray-400 line-through">
              ${product.price}
            </p>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {Math.round(
                ((product.price - product.offerPrice) / product.price) * 100
              )}
              % OFF
            </span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{product.des}</p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Key Features
            </h3>
            <ul className="space-y-3">
              {[product.ram, product.camera, product.battery].map(
                (spec, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">{spec}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <Link to="/cart" className="block mt-8">
            <button
              className="w-full bg-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => productSpecification(product.id)}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
