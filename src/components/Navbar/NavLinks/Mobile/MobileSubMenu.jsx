import { useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

import { BlogContext } from "context/BlogContext";

const MobileSubMenu = ({
  selectedSubHeading,
  setSelectedSubHeading,
  sublinks,
}) => {
  const { setOpenNav } = useContext(BlogContext);

  return (
    <div className=" bg-gray-100 rounded-lg ">
      {sublinks.map((slinks) => (
        <div>
          <div>
            <h
              onClick={() =>
                selectedSubHeading !== slinks.id
                  ? setSelectedSubHeading(slinks.id)
                  : setSelectedSubHeading("")
              }
              className="py-4 pr-7 font-semibold pl-5 md:pl-0 hover:cursor-pointer flex justify-between items-center"
            >
              {slinks.Head}

              <span
                className={`text-xl md:mt-1 md:ml-2 inline duration-100 ${
                  selectedSubHeading === slinks.id ? "rotate-180" : null
                }`}
              >
                <IoChevronDown />
              </span>
            </h>
            <div
              className={`${
                selectedSubHeading === slinks.id ? "" : "hidden"
              } bg-gray-200 rounded-lg py-2`}
            >
              {slinks.sublink.map((slink) => (
                <Link to={slink.link} onClick={() => setOpenNav(false)}>
                  <li className="py-3 mr-7 ml-2 pr-4 ">{slink.name}</li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileSubMenu;
