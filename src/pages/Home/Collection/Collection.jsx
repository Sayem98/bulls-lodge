import Slider from "./components/Slider"
const Collection = () => {
  return (
    <section id="collection" className="mt-32 md:mt-64 mb-32 md:mb-64 m-4">
      <div className="text-center font-Oswald">
        <h2 className="uppercase font-bold my-2  text-5xl md:text-6xl mb-4">
          OUR LODGE'S NFT COLLECTION
        </h2>
        <h3 className="text-sm md:text-2xl mt-4 font-normal">
          Each Bull features a combination of unique traits,
        </h3>
        <h3 className="text-sm md:text-2xl font-normal mb-12 md:mb-24">
          handcrafted in signature style by our in-house digital artists.
        </h3>
      </div>
      <Slider
        collect={[
          "/assets/images/collect1.png",
          "/assets/images/collect2.png",
          "/assets/images/collect3.png",
          "/assets/images/collect4.png",
          "/assets/images/collect5.png",
          "/assets/images/collect6.png",
        ]}
      />
    </section>
  )
}

export default Collection
