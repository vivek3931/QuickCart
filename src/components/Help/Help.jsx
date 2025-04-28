import React from "react";

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Help Center</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium mb-2">How do I place an order?</h3>
          <p className="text-gray-600">
            Browse our products, add items to your cart, and proceed to
            checkout. Follow the steps to enter your shipping and payment
            information to complete your purchase.
          </p>
        </div>

        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium mb-2">
            What payment methods do you accept?
          </h3>
          <p className="text-gray-600">
            We accept major credit cards (Visa, MasterCard, American Express),
            PayPal, and other secure payment methods.
          </p>
        </div>

        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium mb-2">
            How can I track my order?
          </h3>
          <p className="text-gray-600">
            Once your order ships, you'll receive a tracking number via email.
            You can also check your order status in your account dashboard.
          </p>
        </div>

        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium mb-2">
            What is your return policy?
          </h3>
          <p className="text-gray-600">
            We offer a 30-day return policy for most items. Products must be
            unused and in original packaging. Contact customer service to
            initiate a return.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-4">
          Our customer service team is available Monday through Friday, 9am-5pm
          EST
        </p>
        <div className="space-y-2">
          <p className="text-gray-600">Email: support@quickcart.com</p>
          <p className="text-gray-600">Phone: 111-123-4567</p>
        </div>
      </section>
    </div>
  );
};

export default Help;
