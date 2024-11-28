import images from "../assets";

function IntroVisual() {
  return (
    <div className="p-4 mt-10 md:mt-0 h-80 sm:h-[22rem] md:h-[32rem] lg:h-3/4 lg:mb-0 md:px-16 md:py-16 lg:px-32 lg:py-14 xl:h-full xl:mb-20">
      <div className="md:py-16">
        <h3 className="font-bold font-manrope sm:text-2xl lg:text-4xl">
          Who we are
        </h3>
        <br />
        <p className="font-manrope text-xs sm:text-xl lg:text-2xl">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      <br />
      <br />
      <div>
        <img className="w-full h-auto" src={images.mid} alt="mid" />
      </div>
    </div>
  );
}

export default IntroVisual;
