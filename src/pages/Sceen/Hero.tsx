import { ReactTyped } from "react-typed"

const Hero = () => {
    // const [typed,setTyped] = React.useState<Typed| undefined>()
  return (
    <main className="text-[#fff] bg-[#000] border-none relative">
      {/* <img src="https://i.im.ge/2024/08/07/fuUqly.analyst-uses-computer-dashboard-data-600nw-2285412735.webp" alt="" className="absolute top-0 w-full  h-[599px] object-cover"/> */}
      <div className="max-w-[1240px]
      w-[100%] h-[599px] mx-auto text-center flex flex-col justify-center  opacity-95">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS.</p>
        <h1 className="md:text-7xl sm:text-7xl text-4xl font-bold md:py-3">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-lg text-lg font-bold py-1">Fast, Flexible, Financing For You.</p>
          <ReactTyped strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
          className="md:text-5xl sm:text-lg text-lg font-bold  pl-2 text-gray-500"
          />
            {/* <ReactTyped
          typedRef={setTyped}
          strings={["Here you can find anything"]}
          typeSpeed={40}
        /> */}
        
        </div>
        <p className="
        md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className="bg-[#00df9a] rounded-md font-medium ease-in-out duration-700 mx-auto py-3 my-5 px-5 
        hover:bg-[#fff] cursor-pointer text-[#000300]">Get Started</button>
      </div>
    </main>
  )
}

export default Hero