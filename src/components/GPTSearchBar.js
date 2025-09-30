import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const GPTSearchBar = () => {

  const langKey = useSelector(store  =>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" bg-black w-1/2 grid grid-cols-12  ">
      {/* MAKING IT DYNAMIC BY GETTING FROM THE LANG CONSTANTS  */}
        <input
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder || ""}
        />
        <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
