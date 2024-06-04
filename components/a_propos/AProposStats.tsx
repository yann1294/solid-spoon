import { MdPeopleAlt } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoMdBookmarks } from "react-icons/io";

const AProposStats = () => {
  const style = { color: "#F59300", fontSize: 60 };
  return (
    <div className="mx-24 border-4 border-color_border_stats rounded-full px-12">
      <div className="grid grid-cols-12 col-span-12 justify-center">
        <div>
          <MdPeopleAlt style={style} />
          <p className="mt-5 text-xl">
            +100 <span className="block">Students</span>
          </p>
        </div>
        <div>
          <BiWorld style={style} />

          <p className="mt-5 text-xl">
            +77 <span className="block">Firms</span>
          </p>
        </div>
        <div>
          <IoMdBookmarks style={style} />
          <p className="mt-5 text-xl">
            +449 <span className="block">Stages</span>
          </p>
        </div>

        <div className="mr-16">
          <IoMdBookmarks style={style} />
          <p className="mt-5 text-xl">
            +190 <span className="block">center</span>
          </p>
        </div>
        <div>
          <MdPeopleAlt style={style} />
          <p className="mt-5 text-xl">
            +89 <span className="block">partenaires</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AProposStats;
