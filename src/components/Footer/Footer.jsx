import React from 'react'

const Footer = () => {
return (
    <footer className="shadow border-t-[1.5px] border-[#e2e2e7]">
            <div className="max-w-[1200px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                    <div className="flex items-center">
                                            <img
                                                    className="h-8 sm:h-12 w-auto"
                                                    src="/src/assets/ecommerce_logo.png"
                                                    alt="Company Logo"
                                            />
                                            <p className="ml-4 text-orange-800 text-sm sm:text-base">© 2025 QuickCart. All rights reserved.</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                                            <a href="#" className="text-orange-600 hover:text-orange-800 text-sm sm:text-base">
                                                    About Us
                                            </a>
                                            <a href="#" className="text-orange-600 hover:text-orange-800 text-sm sm:text-base">
                                                    Contact
                                            </a>
                                            <a href="#" className="text-orange-600 hover:text-orange-800 text-sm sm:text-base">
                                                    Terms
                                            </a>
                                            <a href="#" className="text-orange-600 hover:text-orange-800 text-sm sm:text-base">
                                                    Privacy
                                            </a>
                                    </div>
                            </div>
                            <hr className="text-[#e2e2e7] border-[1.5px]" />
                            <div className="pt-8">
                                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                                            <div className="flex space-x-6">
                                                    <a href="#" className="text-gray-600 hover:text-orange-800">
                                                            <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#" className="text-gray-600 hover:text-orange-800">
                                                            <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a href="#" className="text-gray-600 hover:text-orange-800">
                                                            <i className="fab fa-instagram"></i>
                                                    </a>
                                            </div>
                                            <div className="flex items-center w-full sm:w-auto border-2 rounded-md border-orange-600 overflow-hidden">
                                                    <input
                                                            type="email"
                                                            placeholder="Subscribe to our newsletter"
                                                            className="w-full px-4 py-2 focus:outline-none focus:ring-orange-600"
                                                    />
                                                    <button className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 whitespace-nowrap">
                                                            Subscribe
                                                    </button>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
    </footer>
)
}

export default Footer