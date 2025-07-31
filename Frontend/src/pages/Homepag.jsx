import React, { useState } from 'react'
import Search from '../components/Search'
import Categories from '../components/categories'
import Card from '../components/Card'
import { food_items } from './food'
import { DataContext } from '../context/Usercontext'
import { useContext } from 'react';
import { useSelector } from 'react-redux'
import Cart from '../components/cart'
import Card2 from '../components/Card2'
function Home(){
const { cate, setcate,input } = useContext(DataContext);


function filter(category){



  if(category==="All"){
setcate(food_items);
  }
  else{
    let newfood_items = food_items.filter((item)=>(item.food_category===category));
    setcate(newfood_items);
  }
}



    return (
        <div className='bg-slate-200 w-full min-h-screen'> 
<Search/>
{!input? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>  
{Categories.map((items)=>{
    return <div key={items.id} className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-amber-300 font-semibold rounded-md shadow-xl hover:bg-amber-100 cursor-pointer transition-all duration-200 ' onClick={()=>filter(items.name)}>
         { items.icon}
        {items.name}
    </div>
})}</div>: null   }   


<div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-9 pb-9'>
{  cate.length>1? 
  cate.map((item)=>(
   <Card 
  key={item.id}
  name={item.food_name}
  image={item.food_image}
  id={item.id}
  price={`${item.price}`}
  type={item.food_type}
  
/>
  )): 
  
  <div className='text-xl text-center text-amber-600 pt-9'>Not Found</div>} 
  <Cart  
></Cart>
</div> 

</div>)}
export default Home