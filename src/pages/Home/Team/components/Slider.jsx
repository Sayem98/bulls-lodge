import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useMediaQuery } from "react-responsive"

const Slider = ({ team }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  return (
    <>
      <Splide
        options={{
          autoHeight: true,
          type: "loop",
          perPage: isBigScreen ? 6 : 3,
          focus: 0,
          gap: "2%",
          pagination: false,
        }}
        aria-label="Team"
      >
        {team.map((member, index) => (
          <SplideSlide key={index}>
            <div className=" rounded-xl  bg-gradient-to-b from-[#FF0099B2] to-[#B845FFB2] ">
              <img
                className=" md:h-[300px] h-[180px] "
                src={member.img}
                alt=""
              />
            </div>
            <h3 className="uppercase font-Oswald font-semibold my-2 text-xl text-center md:text-3xl mb-4">
              {member.name}
            </h3>
            <p className="  font-Oswald leading-3 capitalize my-2 text-lg md:text-2xl mb-4">
              {member.designation}
            </p>
            <p className="font-thin text-xs md:text-base capitalize my-2 mb-4">
              {member.description}
            </p>
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}

export default Slider
