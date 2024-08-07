import {  FaUserCheck, FaUsers } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"


const Cards = () => {
  return (
    <section className="w-full px-4 py-[10rem] bg-[#fff]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12">
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500 ">
                <FaUserCheck size={60} className="w-20 mx-auto mt-[-3rem] bg-[#fff]"/>
                <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
                <p className="text-center text-4xl font-bold">$3490</p>
                <div className="font-medium text-center">
                    <p>500 GB Storage</p>
                    <p>1500 GB Storage</p>
                    <p>1 Granted User</p>  
                </div>
                <div className="flex justify-center items-center"> <button className="bg-[#00df9a] rounded-md font-medium ease-in-out duration-700 mx-auto py-3 my-5 px-5 md:mx-0
        hover:bg-[#000300] cursor-pointer text-[#fff]"> Start Trial</button>
</div>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500 bg-gray-100 cursor-pointer">
                <FaUserGroup size={60} className="w-20 mx-auto mt-[-3rem] bg-[#]  object-cover"/>
                <h1 className="text-2xl font-bold text-center py-8">Double</h1>
                <p className="text-center text-4xl font-bold">$5490</p>
                <div className="font-medium text-center">
                    <p>1000 GB Storage</p>
                    <p>2500 GB Storage</p>
                    <p>2 Granted User</p>  
                </div>
                <div className="flex justify-center items-center"> <button className="bg-[#000] rounded-md font-medium ease-in-out duration-700 mx-auto py-3 my-5 px-5 md:mx-0
        hover:bg-[#00df9a] cursor-pointer text-[#fff]"> Start Trial</button>
</div>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500 ">
                <FaUsers size={60} className="w-20 mx-auto mt-[-3rem] bg-[#fff]"/>
                <h1 className="text-2xl font-bold text-center py-8">Triple</h1>
                <p className="text-center text-4xl font-bold">$6490</p>
                <div className="font-medium text-center">
                    <p>2000 GB Storage</p>
                    <p>3500 GB Storage</p>
                    <p>3 Granted User</p>  
                </div>
                <div className="flex justify-center items-center"> <button className="bg-[#00df9a] rounded-md font-medium ease-in-out duration-700 mx-auto py-3 my-5 px-5 md:mx-0
        hover:bg-[#000300] cursor-pointer text-[#fff]"> Start Trial</button>
</div>
            </div>

        </div>
    </section>
  )
}

export default Cards