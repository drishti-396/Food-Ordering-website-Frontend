import { FaBorderAll } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { MdBreakfastDining } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { MdOutlineDomainVerification } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
const Categories= [
{id:1,
     name: "All",
    icon :<FaBorderAll className="w-[60px] h-[60px]  text-amber-500 " />

},
{id:2,
     name: "Pasta",
    icon :<GiNoodles  className='text-amber-500 w-[60px] h-[60px]' />

},
{id:3,
     name: "Breakfast",
    icon :< MdBreakfastDining className="w-[60px] h-[60px]  text-amber-500 " />

},
{id:4,
     name: "Soups",
    icon :<MdSoupKitchen className="w-[60px] h-[60px]  text-amber-500 " />

},
{id:5,
     name: "Main_Course",
    icon :<MdOutlineDomainVerification className="w-[60px] h-[60px]  text-amber-500 " />

},
{id:6,
     name: "Pizza",
    icon :<FaPizzaSlice className="w-[60px] h-[60px]  text-amber-500 " />

},
{id:7,
     name: "Burger",
    icon :<PiHamburgerFill className="w-[60px] h-[60px]  text-amber-500 " />

},

]
export default Categories;