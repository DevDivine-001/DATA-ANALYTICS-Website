import { ReactTyped } from "react-typed"

const Hero = () => {
    // const [typed,setTyped] = React.useState<Typed| undefined>()
  return (
    <main className="text-[#fff] bg-[#000300] border-none ">
      <div className="max-w-[1240px]
      w-[100%] h-[599px] mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS.</p>
        <h1 className="md:text-7xl sm:text-7xl text-4xl font-bold md:py-3">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">Fast, Flexible, Financing For You.</p>
          <ReactTyped strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
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