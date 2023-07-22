import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartitem from "../component/Cartitem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-center items-center">
        {cart && cart.length > 0 ? (
          <div className=" flex lg:flex-row  justify-center flex-col ">
            <div className="flex flex-col m-5 p-5">
              {cart.map((item, index) => {
                return <Cartitem key={item.id} item={item} itemIndex={index} />;
              })}
            </div>
            <div className=" flex flex-col p-4 items-center">
              <div className="">
                <p className="text-green-700 font-bold text-xl">
                  Your Cart{" "}
                </p>
                <div className="text-green-700 font-bold text-5xl">Summary</div>
                <p className="m-4">
                  <span className="font-bold ">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="lg:mt-40">
                <p className="font-semibold ">
                  Total Amount :{" "}
                  <span className="font-bold">$ {Math.round(totalAmount*100)/100}</span>
                </p>
              </div>
              <div className="w-[256px]  mt-4">
                <button className="bg-green-500 p-4 ml-3 text-white font-bold w-full rounded-xl">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-screen w-screen justify-center items-center">
            <h1 className="mb-5 font-extrabold"> Cart Empty </h1>
            <Link to={"/"}>
              <button className="bg-green-600 font-bold text-white p-2 w-[120px] rounded-xl">Shop Now</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
