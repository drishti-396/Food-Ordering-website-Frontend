import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice"; 
import Card from "./Card";

function Card2({ name, id, price, image ,qty}) 
{
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting item with id:", id); 
    dispatch(RemoveItem(id));
  };

  return (
    <div className="w-full h-[120px] shadow-lg p-2 flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-amber-200 text-xl">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-amber-400 hover:bg-gray-200"  onClick={()=>{
              qty>1? dispatch(DecrementQty(id)):qty
            }}>
              -
            </button >
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-amber-400">
              {qty}
            </span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-amber-400 hover:bg-gray-200"  onClick={()=>{
                dispatch(IncrementQty(id))
            }}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-amber-700"> Rs.{price}/-</span>
        <MdDeleteOutline
          className="w-[30px] h-[40px] text-red-600 cursor-pointer"
          onClick={handleDelete}
        />
     
      </div>
    </div>
  );
}

export default Card2;