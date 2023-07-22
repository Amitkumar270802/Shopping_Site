import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slice/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // in redux functoin is created using Dispatch

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added Successfully");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed Successfully");
  };

  return (
    <div className="bg-white w-[300px] h-[400px]  m-5 p-4 flex flex-col justify-center items-center border-4 border-gray-500 hover:scale-105  transition ease-in hover:shadow-[18px_15px_44px_13px_#85E7BE3A] rounded-2xl">
      <div className="">
        <p className="text-gray-900 font-bold text-sm text-center  ">
          {post.title}
        </p>
      </div>
      <div>
        <p className="text-gray-400 font-normal text-[14px] text-center p-4">
          {post.description.split(" ").slice(0, 7).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[150px]">
        <img src={post.image} alt="Error" className="h-full w-full" />
      </div>
      <div className="flex justify-between w-10/12 m-6 ">
        <div>
          <p className="text-green-500 font-extrabold">${post.price}</p>
        </div>
        <div>
          {cart.some((p) => p.id == post.id) ? (
            <button
              onClick={removeFromCart}
              className="border border-black  font-bold hover:text-white hover:bg-black  rounded-full  text-xs p-2"
            >
              Remove Cart
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="border border-black       font-bold  hover:text-white hover:bg-[#1e1e1e]   rounded-full  text-xs p-2"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
