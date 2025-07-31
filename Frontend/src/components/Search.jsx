import React, { useContext, useEffect, useState } from 'react'

import { MdFoodBank } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { DataContext } from '../context/Usercontext';
import { food_items } from '../pages/food';
function Search(){
const {input,setinput,cate,setcate,showCart,setShowCart}=useContext(DataContext);
useEffect(
  ()=>{
   let newlist= food_items.filter((items)=>items.food_name.includes(input)||items.food_name.toLowerCase().includes(input))
   setcate(newlist)
  },[input]
)
let itemm = useSelector(state => state.cart)
    return (
        <div className ='w-full h-[100px] flex justify-between items-center px-5 md:px-8'> 

<div className = 'w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md'> 
  <MdFoodBank  className='w-[30px] h-[30px] text-amber-500 '/>
</div>

  <form className='h-[60px] w-[40%] flex items-center bg-white gap-5 px-5 shadow-md rounded-md md:w-[70%]' onSubmit  ={(e)=>e.preventDefault()}>
    <FaSearch className=' text-amber-500 w-[20px] h-[20x] '/> 
    <input type="text"placeholder=' Search Items..' className='w-[100%] outline-none text-16px rounded-md md:text-20px' onChange={(event)=>setinput(event.target.value) } value={input}/>


  </form>
  <div className = 'w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl  rounded-md relative cursor-pointer' onClick={()=>{
   setShowCart(true)
  }}> 
    <span className= ' absolute top-0 right-2  text-amber-500  font-bold text-[18px]' >{itemm.length}</span>
  <CiShop  className='w-[30px] h-[30px]  text-amber-500 '/>
</div>
        </div>
      
    )
} export default Search;