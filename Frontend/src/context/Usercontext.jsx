import { createContext, useState } from "react"
import { food_items } from "../pages/food";
export const DataContext = createContext()

function UserContext({children}){
let [input,setinput] =  useState("");
let [cate,setcate] = useState(food_items);
let [showCart,setShowCart]= useState(false);
    let data ={
input,
setinput,
cate,
setcate,
  showCart,
  setShowCart
    }
 return(
<DataContext.Provider value={data}>

        <div>
{children}
        </div>
    

</DataContext.Provider>
 )
}
export default UserContext