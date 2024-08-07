import data from "../../assets/pngtree-graph-analytics-business-diagram-marketing-statistics-tren-png-image_1968572-removebg-preview.png"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
}
from "react-icons/fa"

const Footer = () =>{
  return(
    <footer className="bg-[#000300]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="flex flex-col gap-3">
      <img src={data} alt="" className="h-[60px] w-[60px] rounded-[50px] object-cover"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur odio qui aliquam quidem in at porro illum distinctio sunt. Fugiat ut consectetur aut. Ex dolor aliquam ullam veniam vero!</p>
        <div className="flex gap-4">
          <FaFacebookSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
      </div>

      <div className="flex justify-between mt-8 md:col-span-2 flex-wrap gap-8">
     <div className="flex gap-3 flex-col">
         <h1 className="font-medium text-gray-400 hover:text-[#00df9a] ease-in-out duration-700">Solutions</h1>
       <ul>
        <li className="py-2 text-sm">Analytics</li>
        <li className="py-2 text-sm">Marketing</li>
        <li className="py-2 text-sm">Commerce</li>
        <li className="py-2 text-sm">Insights</li>
       </ul>
     </div>

      <div className=" flex gap-3 flex-col">
        <h1 className="font-medium text-gray-400 hover:text-[#00df9a] ease-in-out duration-700">Support</h1>
       <ul>
        <li className="py-2 text-sm">Pricing</li>
        <li className="py-2 text-sm">Documentation</li>
        <li className="py-2 text-sm">Guides</li>
        <li className="py-2 text-sm">APIs. Status</li>
       </ul>
      </div>
      <div className=" flex gap-3 flex-col">
        <h1 className="font-medium text-gray-400 hover:text-[#00df9a] ease-in-out duration-700">Company</h1>
       <ul>
        <li className="py-2 text-sm">About</li>
        <li className="py-2 text-sm">Blog</li>
        <li className="py-2 text-sm">Jobs</li>
        <li className="py-2 text-sm">Press & Careers</li>
       </ul>
      </div>
      <div className=" flex gap-3 flex-col mr-12">
        <h1 className="font-medium text-gray-400 hover:text-[#00df9a] ease-in-out duration-700">Legal</h1>
       <ul>
        <li className="py-2 text-sm">Claim</li>
        <li className="py-2 text-sm">Policy</li>
        <li className="py-2 text-sm">Terms</li>
        <li className="py-2 text-sm">Insights</li>
       </ul>
      </div>
      
      </div>
      

    </div>
    </footer>
  )
}

export default Footer