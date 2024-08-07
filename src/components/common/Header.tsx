// import { Link } from "react-router-dom";
import React, {useState} from "react"
import data from "../../assets/pngtree-graph-analytics-business-diagram-marketing-statistics-tren-png-image_1968572-removebg-preview.png"

import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Header: React.FC = () => {
  const [DropDownMenu, setDropDownMenu] = useState(false)
  const handleNav = () =>{
    setDropDownMenu(!DropDownMenu)
  }
  return (
      <header className="z-30 top-0 sticky bg-[#000300] border-none">
        <nav  className="flex justify-between items-center h-20 max-w-[1240px] px-3 mx-auto">
        <img src={data} alt="" className="h-[60px] w-[60px] rounded-[50px] object-cover"/>
        <ul className="hidden md:flex text-[#fff]">
          <li className="p-4 hover:text-[#00df9a] ease-in-out duration-700 cursor-pointer">Home</li>
          <li className="p-4 hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Company</li>
          <li className="p-4 hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Resources</li>
          <li className="p-4 hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">About</li>
          <li className="p-4 hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Contact</li>
        </ul>
       <div onClick={handleNav} className="cursor-pointer block md:hidden text-[#fff]">
       {!DropDownMenu ?  <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}</div>
       <div 
       className={!DropDownMenu ? "fixed left-[-100%] ease-in-out duration-700 text-[#ffff] bg-[#000300]" : "fixed left-0 top-[70px] w-[100%] h-full border-r-none ease-in-out duration-700 border-none cursor-pointer block md:hidden text-[#fff] bg-[#000300]"}>
        {/* <h1 className="w-full text-3xl font-bold' text-[#00df9a] m-4 ">React</h1> */}
        <ul className="xl:p-16 flex flex-col gap-6 sm:p-5">
           <li className="p-4 border-gray-600 border-b hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Home</li>
          <li className="p-4 border-gray-600 border-b hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Company</li>
          <li className="p-4 border-gray-600 border-b hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Resources</li>
          <li className="p-4 border-gray-600 border-b hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">About</li>
          <li className="p-4 hover:text-[#00df9a]  ease-in-out duration-700 cursor-pointer">Contact</li>
        </ul>
       </div>
           </nav>
      </header>
  );
};

export default Header;
