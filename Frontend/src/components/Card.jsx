import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
import {AddItem} from '../redux/cartSlice';

import { food_items } from '../pages/food'
import { toast } from "react-toastify";

function Card({name ,image ,id ,price, type} ){
    let dispatch = useDispatch()

 
return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-amber-200 ">
<div  className="w-[100%] h-[60%] overflow-hidden rounded-lg">
<img src={image} alt="" />

</div>
<div className="text-2xl font-semibold">
{name}
</div>
<div className= " w-full flex justify-between items-center ">
 <div className="text-l text-amber-400 font-bold"> {price}</div>

<div className="flex justify-center items-center gap-2 text-amber-400  text-xl font-semibold"> <LuLeafyGreen /><span>{type}</span> </div>
    </div>
    <button className=" w-full p-3 rounded-lg  bg-amber-400 text-gray-700 hover:bg-amber-200 transition-all " onClick={()=>{dispatch(AddItem( {id:id,name:name,price:price, image:image,qty:1})); toast.success("item added") 
    }
}> Add To Cart</button></div>
)
}
export default Card;