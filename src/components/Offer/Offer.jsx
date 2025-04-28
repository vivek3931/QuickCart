import React from "react";

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

return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer) => (
                <div
                    key={offer.id}
                    className="relative bg-white rounded-lg shadow-lg overflow-hidden 
                    transform transition-all duration-500 ease-in-out hover:scale-105 
                    hover:shadow-2xl hover:bg-gradient-to-r hover:from-orange-50 
                    hover:to-white border-2 border-transparent hover:border-orange-300
                    hover:-translate-y-1"
                >
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 
                            transition-colors duration-300 hover:text-orange-600">
                            {offer.title}
                        </h3>
                        <div className="text-3xl font-bold text-orange-600 mb-4 
                            transition-all duration-300 hover:scale-110 transform">
                            {offer.discount}
                        </div>
                        <p className="text-gray-600 mb-4">{offer.description}</p>
                        <small className="text-gray-500">
                            Valid until: {offer.validUntil}
                        </small>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Offer;
