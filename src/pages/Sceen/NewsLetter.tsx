

const NewsLetter = () => {
  return (
    <div className="w-full py-16 px-4 text-[#fff] bg-[#000300]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to your newsletter and stay up to date.</p>
            </div>
           <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <input type="text" placeholder="Enter Email" className="p-3 w-[60%] outline-none rounded-md text-[#000] max-md:w-full"/>
                     <button className="bg-[#00df9a] rounded-md font-medium ease-in-out duration-700 mx-auto py-3 my-5 px-5 md:mx-0
        hover:bg-[#fff] cursor-pointer text-[#000]">Get Notify Me</button>

                </div>
                <p>We care about protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span> </p>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter