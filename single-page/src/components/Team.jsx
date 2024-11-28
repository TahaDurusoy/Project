import Card from "./Card";
import { jobs } from "../assets";
import Success from "./Success";

function Team() {
  return (
    <div className="flex relative mt-20 sm:h-[32rem] sm:mt-48 w-screen flex-col items-center justify-start gap-12 p-4 h-80 md:h-[32rem] lg:pt-0 lg:mt-10 lg:h-auto md:px-16 md:py-16 lg:px-32 lg:py-14 xl:h-full xl:mt-12">
      <div>
        <h3 className="font-manrope font-medium text-xl sm:text-2xl lg:text-3xl">
          <span>Meet the heroes behind the magic</span>
        </h3>
      </div>

      <div className="flex md:mt-0 w-auto gap-2 md:gap-8 lg:gap-10">
        {Object.values(jobs).map((item, index) => {
          return (
            <Card key={index} img={item.src} name={item.name} job={item.job} />
          );
        })}
      </div>
      <Success />
    </div>
  );
}

export default Team;
