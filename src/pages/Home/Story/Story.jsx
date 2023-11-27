const Story = () => {
  return (
    <section className=" md:m-16 flex md:flex-row flex-col justify-between md:items-end md:mb-64 mb-32">
      <div className="md:w-2/5 text-left md:px-16 md:m-12 m-8 mb-0">
        <h2 className="w-full uppercase  font-bold my-2 text-4xl md:text-6xl font-Oswald">
          The Story
        </h2>
        <h3 className="w-full text-xl md:text-3xl font-normal font-Oswald mb-12">
          Bulls are RACING!
        </h3>
        <p className="2xl:text-lg  md:block hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever printer took a
          galley of type Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <a href="#">
          <div className="hidden md:block bg-[url('/assets/images/exploreBtn.png')] bg-no-repeat p-6   cursor-pointer mt-4 hover:bg-[url('/assets/images/exploreBtnHover.png')]">
            Explore More
          </div>
        </a>
      </div>
      <div className="flex md:block ">
        <p className="2xl:text-lg  w-3/6  md:hidden flex items-end ml-8 mr-4 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, ever since
        </p>
        <img
          className="w-3/6 md:w-full ml-auto "
          src={"/assets/images/storyBull.png"}
          alt=""
        />
      </div>
      <div className="block md:hidden m-8">
        <p>
          {" "}
          ever since the 1500s, when an unknown printer took a galley of type
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever printer took a
          galley of type Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <a href="#">
        <div className=" md:hidden  bg-[url('/assets/images/exploreBtn.png')] bg-no-repeat p-6 m-8   cursor-pointer mt-4 hover:bg-[url('/assets/images/exploreBtnHover.png')]">
          Explore More
        </div>
      </a>
    </section>
  )
}

export default Story
