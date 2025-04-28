import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const { filteredObject } = useContext(UserContext);
  console.log(filteredObject);

  const [cartItems, setCartItems] = useState(
    filteredObject.map((item) => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const handleCheckout = () => {
    toast.info("Proceeding to checkout...");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b border-[#5a5a5a6b] pb-4">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-500">Your cart is empty</p>
          <p className="text-gray-400 mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1 ml-8 space-y-3">
                  <h3 className="lg:md:text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-lg text-orange-600 font-medium">
                    ${item.price}
                  </p>
                  <div className="flex items-center space-x-3">
                    <button
                      className="lg:md:px-4 lg:md:py-2 px-2 py-0.5 border-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-extrabold text-xl"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="lg:md:px-6 px-4 py-1 lg:md:py-2 bg-gray-50 rounded-full font-medium text-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="lg:md:px-4 lg:md:py-2 px-2 py-0.5 border-2 rounded-full hover:bg-gray-100 transition-colors duration-200 font-extrabold text-xl flex items-center justify-center"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Total: $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h3>
            <button
              className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl cursor-pointer"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
