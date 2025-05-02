import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8"></div>
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600">
            QuickCart was born out of a simple idea — shopping should be fast,
            easy, and enjoyable. What started as a small garage project in 2025
            has grown into one of the most trusted online marketplaces, serving
            thousands of happy customers across the country.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FaUserCheck className="text-orange-500" /> Customer Satisfaction
            </li>
            <li className="flex items-center gap-2">
              <FaAward className="text-orange-500" /> Quality Products
            </li>
            <li className="flex items-center gap-2">
              <FaHandshake className="text-orange-500" /> Reliable Service
            </li>
            <li className="flex items-center gap-2">
              <FaDollarSign className="text-orange-500" /> Fair Pricing
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-2 text-gray-600">
            <p>Email: quickcart@yourstore.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Post Office Street, Ghansoli City, ST 12345</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
