import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Hero = () => {
  const [time, setTime] = useState(Date.now() + 10000);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) setIsCountdownComplete(true);

    return (
      <span>
        {hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
      </span>
    );
  };

  return (
    <section className="relative pt-32 md:mb-64 mb-12">
      <div className="flex font-Oswald text-center text-xl justify-center ">
        <Link to="/mint">
          <img
            className="absolute md:hidden left-0 w-[100%] scale-[0.95] "
            src="/assets/images/heroHolder.png"
            alt=""
          />
        </Link>

        <div>
          <h1 className="zoom-in-text px-4 md:px-0 text-5xl md:text-7xl leading-relaxed md:leading-snug transition-all font-bold mb-4">
            THE BULLS ARE
            <br /> RAGING...
          </h1>
          <h2 className="hidden md:block md:text-xl 2xl:text-4xl mb-2">
            Bull's Lodge NFT;
          </h2>
          <h2 className="hidden md:block md:text-xl 2xl:text-3xl mb-2">
            Home of your benefits in
          </h2>
          <h2 className="hidden md:block md:text-xl 2xl:text-3xl mb-16">
            Metaverse & Reality. MINT to be announced soon.
          </h2>
        </div>
      </div>
      <div className=" md:flex hidden justify-center">
        <Link to="/mint">
          <button className="font-Oswald font-bold border-4 hover:bg-gradient-to-b hover:from-[#EA00EF]  hover:to-[#FF0099]  border-[#FF0099] p-8 mb-4 text-5xl">
            {isCountdownComplete ? "MINT" : "MINT TBA"}
          </button>
        </Link>
      </div>
      <p className="font-Oswald font-bold text-center text-6xl mt-36 md:mt-0">
        {/* 01:23:45 */}
        <Countdown date={time} renderer={renderer} />
      </p>
      <div className="md:hidden font-Oswald text-center text-xl mt-6">
        <h2 className="text-2xl">Bull's Lodge NFT;</h2>
        <h2 className="">Home of your benefits in</h2>
        <h2 className="">Metaverse & Reality. MINT to be announced soon.</h2>
      </div>
      <div
        data-aos="slide-right"
        data-aos-duration="500"
        className="absolute  left-0 2xl:top-44 md:top-24"
      >
        <img
          className=" md:block hidden  origin-left md:scale-[0.7] 2xl:scale-90 "
          src="/assets/images/leftHero.png"
          alt=""
        />
      </div>
      <div
        data-aos="slide-right"
        data-aos-duration="500"
        className="absolute  left-0 2xl:top-44 md:top-24"
      >
        <img
          className=" fade-in-image  md:block hidden origin-left md:scale-[0.7] 2xl:scale-90 "
          src="/assets/images/leftHeroChange.png"
          alt=""
        />
      </div>
      <img
        className="fade-out 4xl:hidden   md:block hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75 mt-4"
        src="/assets/images/middleHero.png"
        alt=""
      />
      <img
        className="fade-in-image  md:block hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75  mt-4"
        src="/assets/images/middleHeroChange.png"
        alt=""
      />
      <div
        data-aos="slide-left"
        data-aos-duration="500"
        className="absolute  right-0 2xl:top-44 md:top-24"
      >
        <img
          className=" md:block hidden mr-8 origin-right md:scale-[0.7] 2xl:scale-90"
          src="/assets/images/rightHero.png"
          alt=""
        />
      </div>
      <div
        data-aos="slide-left"
        data-aos-duration="500"
        className="absolute  right-0 2xl:top-44 md:top-24"
      >
        <img
          className="fade-in-image  md:block hidden  origin-right mr-8  md:scale-[0.7] 2xl:scale-90 "
          src="/assets/images/rightHeroChange.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
