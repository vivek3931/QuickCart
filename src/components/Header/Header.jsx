import React, { useState, useEffect } from "react";
// import Theme from "../ThemeToggle/Theme";
import logo from "../../assets/ecommerce_logo.png";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const {
    filteredObject,
    input,
    setInput,
    setSearchData,
    searchdata,

  } = useContext(UserContext);

 

  const handleSuggestion = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleClose = () => {
    setInput("");
    setSearchData([]);
    document.querySelector(".input-box").value = "";
  };
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    setToggle(true);
  };

  const hideMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [toggle]);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }
  }, [toggle]);

  return (
    <header className="sticky top-0 z-[999] bg-white p-3 shadow text-gray-700 ">
      <div
        className="fixed z-[9999] h-screen w-full duration-500 bg-black/50 lg:hidden"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideMenu}
      >
        <div
          className="h-full w-[250px]  md:w-[400px]  fixed top-0 left-0 overflow-y-auto duration-300 bg-white shadow-2xl"
          style={{ left: toggle ? "0" : "-100%" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <nav className="flex flex-col list-none animate-[slideIn_0.3s_ease-in-out] bg-gradient-to-b from-white to-orange-50">
            <NavLink
              to={"/"}
              onClick={hideMenu}
              className="hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-8 py-5 border-orange-100/30 first:rounded-t-lg"
            >
              <FaHome className="text-xl text-orange-500" />
              Home
            </NavLink>
            <NavLink
              to={"/offer"}
              onClick={hideMenu}
              className="hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-8 py-5 border-orange-100/30"
            >
              <BiSolidOffer className="text-xl text-orange-500" />
              Offer
            </NavLink>
            <NavLink
              to={"/help"}
              onClick={hideMenu}
              className="hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-8 py-5 border-orange-100/30"
            >
              <IoIosHelpBuoy className="text-xl text-orange-500" />
              Help
            </NavLink>
            <NavLink
              to={"signin"}
              onClick={hideMenu}
              className="hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-8 py-5 border-orange-100/30"
            >
              <CiUser className="text-xl text-orange-500" />
              Sign in
            </NavLink>
            <NavLink
              to="/cart"
              onClick={hideMenu}
              className="hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 relative border-b px-8 py-5 border-orange-100/30"
            >
              <BsCart2 className="text-xl text-orange-500" />
              <span className="absolute top-3 left-11 bg-orange-500 text-white rounded-full px-2 py-0.5 text-xs font-bold shadow-md">
                {filteredObject.length}
              </span>
              Cart
            </NavLink>
          </nav>
          <div className="w-full flex items-center justify-center gap-2 absolute bottom-0 py-6 bg-white border-t border-orange-100 shadow-inner animate-[fadeIn_0.5s_ease-in-out]">
            <div className="w-[60px] hover:scale-110 transition-transform duration-300">
              <img src={logo} alt="logo" className="w-full drop-shadow-md" />
            </div>
            <h1 className="font-extrabold text-orange-600 tracking-tight">
              <span className="font-extrabold text-2xl">
                <i className="hover:scale-125 inline-block transition-transform duration-300">
                  Q
                </i>
              </span>
              uickCart
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <NavLink className="w-[80px] transition-transform duration-300 hover:scale-110">
          <img src={logo} alt="logo" className="w-full" />
        </NavLink>

        <div>
          <nav className="hidden lg:flex list-none ml-auto gap-12 items-center">
            <NavLink
              to={"/"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 hover:scale-105"
            >
              <FaHome className="text-lg" />
              Home
            </NavLink>
            <NavLink
              to={"/offer"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 hover:scale-105"
            >
              <BiSolidOffer className="text-lg" />
              Offer
            </NavLink>
            <NavLink
              to={"/help"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 hover:scale-105"
            >
              <IoIosHelpBuoy className="text-lg" />
              Help
            </NavLink>
            <NavLink
              to={"/signin"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 hover:scale-105"
            >
              <CiUser className="text-lg" />
              Sign in
            </NavLink>
            <NavLink
              to="/cart"
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 relative hover:scale-105"
            >
              <BsCart2 className="text-lg" />
              <span className="absolute -top-2 -right-4 bg-orange-500 text-white rounded-full px-2 py-0.5 text-xs font-bold shadow-md">
                {filteredObject.length}
              </span>
              Cart
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center rounded-3xl shadow-lg border border-orange-500 relative duration-200 transition-all hover:shadow-orange-200">
          <input
            type="text"
            className="px-4 py-2.5 outline-none placeholder:text-gray-400 input-box w-[190px] rounded-l-3xl"
            placeholder="Search here..."
            value={input}
            autoComplete="off"
            onChange={handleSuggestion}
          />
          <button
            type="submit"
            className="text-white py-2.5 px-3 bg-orange-500 rounded-r-3xl hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center font-medium cursor-pointer"
          >
            {searchdata.length > 0 ? (
              <IoClose
                className="text-2xl hover:rotate-90 transition-transform duration-300"
                onClick={handleClose}
              />
            ) : (
              <IoSearch className="text-2xl hover:scale-110 transition-transform duration-300" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out absolute top-full left-0 w-full mt-2 bg-white border border-orange-200 max-h-52 overflow-y-auto z-[10000] shadow-lg rounded-lg ${
              searchdata.length > 0 ? "block" : "hidden"
            }`}
          >
            {
              searchdata.map((data, idx) => (
                <Link
                  to={`/product/${data.id}`}
                  key={idx}
                  className="cursor-pointer p-3 hover:bg-orange-50 block transition-colors duration-200"
                  onClick={handleClose}
                >
                  {data.name}
                </Link>
              ))
              // )
            }
          </div>
        </div>

        <div className="lg:hidden block ml-4">
          <FaBars
            className="text-2xl cursor-pointer hover:text-orange-500 transition-colors duration-300"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
