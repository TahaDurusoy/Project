import images from "../assets";

function Hero() {
  return (
    <div className="flex justify-center items-center bg-gold h-80 relative sm:h-[22rem] md:h-[32rem] lg:h-screen">
      <div className="flex text-center">
        <h1 className="text-4xl h-40 sm:h-[11rem] sm:text-4xl md:text-6xl md:h-[16rem] lg:text-8xl lg:h-80">
          Let’s create something <br /> great together.
        </h1>
      </div>

      <div className="flex bottom-0 absolute">
        <img src={images.Hands} alt="Hands" className="w-2/4 max-w-full" />
        <img src={images.Hands2} alt="Hands2" className="w-2/4 max-w-full" />
      </div>
    </div>
  );
}

export default Hero;
