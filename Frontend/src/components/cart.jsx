import { RxCross2 } from "react-icons/rx";
import Card2 from "./Card2";
import { DataContext } from "../context/Usercontext";

import { useSelector } from "react-redux";

import { food_items } from "../pages/food";
import { useContext } from 'react';
function Cart(){
  let { showCart,setShowCart}= useContext(DataContext)
     let itemm = useSelector(state=>state.cart) 

console.log("Cart items:", itemm)


let subtotal = itemm.reduce((total, item) => {
  const price = Number(item.price) || 0; 
  const qty = Number(item.qty) || 0; 
  return total + (price * qty);
}, 0);



     let deliveryFee =20;
     let taxes= subtotal*(0.5 / 100);
     let total = Math.floor (subtotal+deliveryFee+taxes)
    return(
        <div >
        <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"} `}>
            <header className="w-[100%] flex justify-between items-center text-[18px] font-semibold"> <span className="text-amber-500 ">
Order Item</span>  <RxCross2 className="w-[30px] h-[30px] text-amber-500 text-[18px] font-semibold" onClick={()=>setShowCart(false)}/>       </header>
{itemm.length>0 ?
<>    
<div className="w-full mt-9 flex flex-col gap-8 " > {itemm.map((item)=>(<Card2 name={item.name} price={item.price} image={item.image}id={ item.id} 
qty={item.qty}
/>))} 


 </div>
         <div className="w-full border-t-2  border-b-2 border-gray-400 mt-7  gap-2 p-8 ">
            <div className="w-full flex justify-between items-center"><span className="text-lg text-gray-600 font-semibold">Subtotal</span>    <span className="text-amber-500 font-semibold text-lg">Rs{subtotal}/-</span>     </div>
            
            <div className="w-full flex justify-between items-center"><span className="text-lg text-gray-600 font-semibold">Delievery Fee</span><span className="text-amber-500 font-semibold text-lg"> Rs.{deliveryFee}/-</span></div>
            <div className="w-full flex justify-between items-center"><span className="text-2xl text-gray-600 font-semibold">Taxes</span>
           <span className="text-amber-500 font-semibold text-lg">{taxes}/-</span></div>





        
    
</div>  


<div className="w-full flex justify-between items-center"><span className="text-lg text-gray-600 p-9 font-semibold">Total</span>
           <span className="text-amber-500 font-semibold text-lg">{total}/-</span></div>
<button className=" w-[80%] p-3 rounded-lg  bg-amber-400 text-gray-700 hover:bg-amber-200 transition-all" onClick={()=>{
    console.log('Placing order');
    toast.success("Your order is placed") }}>Place Order</button></>: <div className="text-amber-600 text-center text-2xl font-semibold pt-5"> Cart is Empty</div>
}  
        </div> </div>
    )
}
export default Cart;