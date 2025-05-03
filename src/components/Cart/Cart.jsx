import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const { filteredObject } = useContext(UserContext);

  const [cartItems, setCartItems] = useState(
    filteredObject.map((item) => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    if (navigator.vibrate && typeof navigator.vibrate === 'function') {
      navigator.vibrate(100);
    }
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

  const calculateTotals = () => {
    return cartItems.reduce(
      (acc, item) => ({
        subtotal: acc.subtotal + item.price * item.quantity,
        discount: acc.discount + (item.price - item.offerPrice) * item.quantity,
        final: acc.final + item.offerPrice * item.quantity ,
      }),
      { subtotal: 0, discount: 0, final: 0 }
    );
  };

  const PLATFORM_FEE = 0.11;
  const DELIVERY_FEE = 0.35;

  const [code, setCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleCouponApply = () => {
    if (code === "QUICK200") {
      toast.success("Coupon applied successfully!");
      setIsCouponApplied(true)
      cartItems.final -= 200;
     

    } else if (code === "") {
      toast.error("Please enter a coupon code.");
      setIsCouponApplied(false)
    } else {
      toast.error("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b border-[#5a5a5a6b] pb-4">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16" role="alert">
          <p className="text-2xl text-gray-500">Your cart is empty</p>
          <p className="text-gray-400 mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => {
              const { id, img, name, offerPrice, price, quantity } = item;
              return (
                <div
                  key={id}
                  className="flex items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-32 h-32 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                  />
                  <div className="flex-1 ml-8 space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {name}
                    </h2>
                    <div className="flex items-center">
                      <p className="text-lg text-orange-600 font-medium">
                        ${offerPrice.toFixed(2)}
                      </p>
                      <p className="text-xs ml-3 line-through text-green-600 font-medium">
                        ${price.toFixed(2)}
                      </p>
                    </div>

                    <div
                      className="flex items-center space-x-3"
                      role="group"
                      aria-label="Quantity controls"
                    >
                      <button
                        className="lg:md:px-4 lg:md:py-2 px-3 py-1 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-200 font-bold"
                        onClick={() => decreaseQuantity(id)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="lg:md:px-4.5 lg:md:py-1.5 px-3 py-0.5  bg-gray-100 rounded-full font-medium text-lg">
                        {quantity}
                      </span>
                      <button
                        className="lg:md:px-4 lg:md:py-2 rounded-lg px-3 py-1 bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-200 font-bold"
                        onClick={() => increaseQuantity(id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                      onClick={() => removeItem(id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 tracking-wider">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Have a Coupon Code?
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
                onClick={handleCouponApply}
              >
                Apply
              </button>
            </div>
            {(() => {
              const totals = calculateTotals();
              return (
                <>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-xl font-semibold text-gray-800">
                        ${totals.subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-xl font-semibold text-green-500">
                        -${totals.discount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Platform Fee</span>
                      <span className="text-xl font-semibold text-gray-800">
                        ${PLATFORM_FEE}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Delivery Charges</span>
                      <span className="text-xl font-semibold text-gray-800">
                        ${DELIVERY_FEE}
                      </span>
                    </div>
                    <div className={`flex justify-between items-center ${isCouponApplied ? "block" : "hidden"}`}>
                      <span className="text-gray-600">Coupon Discount</span>
                      <span className={`text-xl font-semibold text-yellow-400 `}>
                        - ${code === "QUICK200" ? 200 : 0}
                      </span>
                    </div>
                    <div className="border-t-2 border-gray-200 my-4"></div>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                      <span className="text-lg font-bold text-gray-800">
                        Total
                      </span>
                      <p className="lg:md:text-sm text-xs text-gray-500">
                        (including taxes and fees)
                      </p>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">
                        $
                        {(totals.final + PLATFORM_FEE + DELIVERY_FEE - (isCouponApplied ? 200 : 0)).toFixed(
                          2
                        )}
                      </span>
                    </div>
                  </div>
                </>
              );
            })()}
            <button
              className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl"
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
