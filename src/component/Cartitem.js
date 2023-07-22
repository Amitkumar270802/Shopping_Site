import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slice/CartSlice";
import { toast } from "react-hot-toast";

const Cartitem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex gap-5 border-b-2 border-gray-400 m-5">
      <div className="h-[140px] w-[100px]">
        <img src={item.image} className="h-4/6" />
      </div>
      <div className="w-[290px]">
        <div className="w-4/6">
          <p className="font-bold ">{item.title}</p>
        </div>
        <div className="flex justify-between mt-6 ">
          <div>
            <p className="font-bold text-green-600">$ {item.price}</p>
          </div>
          <div
            onClick={removeFromCart}
            className="flex justify-center items-center cursor-pointer bg-red-300 rounded-full w-[25px]  "
          >
            <RiDeleteBin6Fill color="#3c3c3c" fontSize="10px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
