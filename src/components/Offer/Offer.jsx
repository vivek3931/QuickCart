import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import coupon from "../../assets/coupon.png";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "50% OFF",
      description: "Get amazing deals on summer collection",
      validUntil: "2025-07-31",
    },
    {
      id: 2,
      title: "New User Special",
      discount: "₹200 OFF",
      description: "Special discount for new customers",
      validUntil: "2025-12-31",
    },
  ];

  const redeemCode = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    navigator.clipboard.writeText("QUICK200");
    toast.success("COUPON COPIED SUCCESSFULLY");
  };

  return (
    <div className="max-w-7xl  mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Special Offers
      </h2>
      <div className="flex flex-wrap justify-between ">
        <div
          className="flex w-full max-w-xl overflow-hidden rounded-lg shadow-md my-4 object-cover"
          style={{ backgroundImage: `url(${coupon})`, backgroundSize: "cover" }}
        >
          <div className="flex-1 p-6  relative ">
            <div className="h-full w-4 absolute right-0 top-0 bottom-0 bg-white rounded-l-full "></div>
            <h2 className="text-3xl font-bold">{offers[0].discount}</h2>
            <p className="mt-2 text-sm">{offers[0].description}</p>
          </div>

          <div className="w-48 bg-white p-4 flex flex-col justify-between items-center text-center">
            <div>
              <p className="text-xs font-semibold">Use by: </p>
              <p className="text-sm font-bold mt-1">{offers[0].validUntil}</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">{offers[0].title}</p>
            <button
              className="bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded my-3 cursor-pointer"
              onClick={redeemCode}
            >
              REDEEM
            </button>
          </div>
        </div>
        <div
          className="flex w-full max-w-xl overflow-hidden rounded-lg shadow-md my-4"
          style={{ backgroundImage: `url(${coupon})`, backgroundSize: "cover" }}
        >
          <div className={`flex-1 p-6  relative`}>
            <div className="h-full w-4 absolute right-0 top-0 bottom-0 bg-white rounded-l-full"></div>
            <h2 className="text-3xl font-bold">{offers[1].discount}</h2>
            <p className="mt-2 text-sm">{offers[1].description}</p>
          </div>

          <div className="w-48 bg-white p-4 flex flex-col justify-between items-center text-center">
            <div>
              <p className="text-xs font-semibold">Use by:</p>
              <p className="text-sm font-bold mt-1">{offers[1].validUntil}</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">{offers[1].title}</p>
            <button
              className="bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded my-3 cursor-pointer"
              onClick={redeemCode}
            >
              REDEEM
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Offer;
