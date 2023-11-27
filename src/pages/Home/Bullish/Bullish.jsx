const Bullish = () => {
  return (
    <section
      id="about"
      className=" md:m-16 flex md:flex-row flex-col-reverse justify-between md:items-end mb-32 md:mb-64"
    >
      <img
        className="md:w-3/6 ml-auto md:px-12 px-8"
        src={"/assets/images/bullishTrio.png"}
        alt=""
      />
      <div className="md:w-2/5 text-left md:px-16 md:m-12 m-8">
        <h2 className="w-full uppercase font-bold my-2 text-4xl md:text-6xl font-Oswald mb-12">
          ARE YOU BULLISH?
        </h2>

        <p className="2xl:text-lg  ">
          Welcome to the Bull's Lodge NFT project, featuring a collection of
          10,000 unique, 3D Hand Drawn NFT artworks and delivering privileges in
          Metaverse and In Real Life utilities to its ever-growing community.
          Bull’s Lodge NFT Collection is fan art and our inspiration is to put
          our Community's benefits in front of everything! We prioritize our
          member’s benefits and privileges while holding your NFT brings
          sustainable passive income to your feet. NFT in our community will
          have a value as identity in our society (even more in DAO!). Each Bull
          is unique, based over hundred of well-designed elements that
          characterize a BULLISH crypto enthusiast. Entering Bull's Lodge NFT
          means joining a family full of people who believe in the future of
          Cryptocurrencies and the Blockchain technology. We’re only just
          getting started yet will never stop focusing on delivering
          unparalleled benefits and utilities to the beloved members of our
          lodge.
        </p>
      </div>
    </section>
  )
}

export default Bullish
