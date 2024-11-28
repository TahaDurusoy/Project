function Success() {
  return (
    <div className="flex bg-black w-screen justify-evenly items-center gap-4 px-10 py-3 sm:py-5 sm:mt-8 lg:px-20 lg:gap-0 lg:h-32 lg:mt-20 xl:h-20 xl:px-48">
      <div className="flex flex-col items-start w-1/4">
        <span className="text-blackgold text-base sm:text-lg lg:text-2xl">
          350 +
        </span>
        <p className="text-white text-sm font-light text-left sm:text-base">
          Clients Worldwide
        </p>
      </div>
      <div className="flex flex-col items-start w-1/4">
        <span className="text-blackgold text-base sm:text-lg lg:text-2xl">
          20 +
        </span>
        <p className="text-white text-sm font-light text-left sm:text-base">
          Team Members
        </p>
      </div>
      <div className="flex flex-col items-start w-1/4">
        <span className="text-blackgold text-base sm:text-lg lg:text-2xl">
          100 +
        </span>
        <p className="text-white text-sm font-light text-left sm:text-base">
          Project Completed
        </p>
      </div>
      <div className="flex flex-col items-start w-1/4">
        <span className="text-blackgold text-base sm:text-lg lg:text-2xl">
          85M +
        </span>
        <p className="text-white text-sm font-light text-left sm:text-base">
          Revenue Generated
        </p>
      </div>
    </div>
  );
}

export default Success;
