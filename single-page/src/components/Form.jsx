import images from "../assets";

function Form() {
  return (
    <div className="flex items-stretch justify-center w-screen pt-20 pb-8 px-2 gap-3 mt-36 sm:mt-10 md:mt-24 lg:mt-0 lg:pb-0 xl:pb-0 xl:mt-0 xl:h-auto xl:gap-10 overflow-hidden">
      <div className="flex w-3/5 lg:w-3/4 xl:w-1/2">
        <img
          className="w-screen object-fill h-full lg:h-3/4 xl:h-auto xl:w-full"
          src={images.formimg}
          alt="sideimg"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between sm:justify-start md:mr-5 lg:w-2/5 xl:w-1/3 lg:justify-start lg:mr-5">
        <h3 className="text-end font-manrope text-base font-bold mb-4 md:text-xl lg:text-2xl">
          <span>
            We`d love to hear <br /> from you
          </span>
        </h3>

        <form className="flex flex-col gap-4 font-extralight text-xs lg:gap-6">
          <input
            className="w-full border border-stone-700 p-2 placeholder-stone-800"
            type="text"
            id="name"
            placeholder="Name*"
            required
          />
          <input
            className="w-full border border-stone-700 p-2 placeholder-stone-800"
            type="email"
            id="mail"
            placeholder="Email*"
            required
          />
          <input
            className="w-full border border-stone-700 p-2 placeholder-stone-800"
            type="url"
            id="website"
            placeholder="Website URL*"
          />
          <textarea
            className="w-full border border-stone-700 p-2 placeholder-stone-800 sm:h-[150px]"
            id="detail"
            placeholder="Project Details*"
            rows="2"
            required
          />
          <button className="bg-black text-white p-2 mt-2 font-manrope">
            Send Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
