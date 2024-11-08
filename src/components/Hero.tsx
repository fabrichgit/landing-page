import Rate from "./Rate";

function Hero() {
  return (
    <div className="flex flex-col gap-12 w-full lg:h-full h-max py-14 md-px-16 px-7">
      <div className="flex flex-wrap justify-between w-full h-max py-5">
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <h1 className="max-lg:text-center text-6xl font-bold leading-[4rem]">
            Getting <span className="text-[#f89f2a]">Quality</span> <br />
            Education Is Now <br />
            More <span className="text-[#f89f2a]">Easy</span>
          </h1>
          <p className="max-lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            maxime molestias nobis. Beatae adipisci numquam quisquam
            consequuntur.
          </p>
          <div className="flex justify-center gap-4 font-bold max-lg:w-full">
            <button className="px-6 py-3 rounded-lg text-white bg-[#f89f2a]">
              Get started
            </button>
            <button className="px-6 py-3 rounded-lg text-[#f89f2a] bg-[#f7e7d396]">
              Get free trial
            </button>
          </div>
        </div>
        <img src="/bro.png" alt="" className="max-xl:hidden inline w-[35rem] h-auto" />
      </div>

      <Rate />
    </div>
  );
}

export default Hero;
