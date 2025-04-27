import React, { useContext, useState } from "react";
// import products from "../data";
import { UserContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const { filteredObject } = useContext(UserContext);

  const [cartItems, setCartItems] = useState(
    filteredObject.map(item => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleCheckout = () => {
    toast.info("Proceeding to checkout...")
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center border-b border-gray-200 py-4 gap-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: {item.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-4 font-medium">{item.quantity}</span>
                  <button
                    className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  // onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-bold">
              Total: $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h3>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            <ToastContainer/>
          </div>
        </>
      )}
    </div>  
  );
};

export default Cart;
