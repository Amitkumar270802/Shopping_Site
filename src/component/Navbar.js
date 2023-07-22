import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-evenly h-20 mx-auto ">
      <NavLink to="/">
        <img
          src="https://fullcart.org/images/fc-logo-green-w.png"
          className="h-[50px] w-[200px] mt-4"
        />
      </NavLink>
      <div className="flex items-center font-medium mr-5 space-x-6">
        <NavLink to="/">
          <p className="text-white text-2xl ">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart className="text-white relative text-2xl" />
          {
            cart.length>0&&(
              <span className="text-white absolute top-4 animate-bounce bg-green-500 text-xs w-5 h-5 rounded-full flex justify-center">{cart.length}</span>)}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
