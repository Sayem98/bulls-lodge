import React from "react"

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/assets/bg.svg')] md:bg-none">
        <div className=" pt-44  justify-center gap-4 items-center 2xl:py-36 2xl:scale-100 md:scale-[0.8]  md:py-16 flex">
          <div>
            <img src="/assets/images/mintLeft.png" alt="" />
          </div>
          <div className="w-1/4 text-center ">
            <button className=" md:border-[20px] border-8 border-[#DB00FF] p-4 md:p-24 text-2xl md:text-6xl font-Oswald font-bold uppercase">
              Mint
              <br /> Now
            </button>
            <p className="text-xs md:text-2xl md:mt-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="text-xs md:text-2xl md:mt-8">
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type
            </p>
          </div>
          <div>
            <img src="/assets/images/mintRight.png" alt="" />
          </div>
        </div>
        <p className="text-xl md:text-6xl text-center md:px-32 px-8 pb-64 mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </section>
    </>
  )
}

export default Hero
