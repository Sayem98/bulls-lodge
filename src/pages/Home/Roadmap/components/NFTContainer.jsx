import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const NFTContainer = ({ img, phase, percent, description }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div data-aos="fade-right" data-aos-duration="500">
      <div className="flex justify-between flex-col md:flex-row items-center my-32 overflow-hidden md:h-[396px]">
        <img className=" md:w-3/5 md:m-2 " src={img} alt="" />
        <div className="md:w-2/5 md:h-[396px] flex justify-between md:border border-[#FF0099] md:border-b-0 md:border-r-0 m-2 md:p-8 p-4">
          <div className="w-3/5 ">
            <div data-aos="slide-right" data-aos-duration="500">
              <p className=" font-Montserrat text-6xl font-black text-[#79FFFE] pb-8">
                {percent}
              </p>
              <p className="md:leading-8 leading-6 font-Montserrat 2xl:text-xl">
                {description}
              </p>
            </div>
          </div>
          <div className="w-1/5 text-[#ffffff40] font-black text-center font-Montserrat text-2xl 2xl:text-3xl">
            <div data-aos="slide-right" data-aos-duration="500">
              <p>PHASE</p>
              <p className="text-6xl">{phase}</p>
              <img src={"/assets/images/arrows.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTContainer
