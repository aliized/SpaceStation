import { BlogContext } from "context/BlogContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MobileSubMenu from "./MobileSubMenu";

import { navLinks } from "../MyLinks";
import { IoChevronDown, IoClose } from "react-icons/io5";

const MobileLinks = () => {
  const { openNav, setOpenNav } = useContext(BlogContext);
  const [selectedHeading, setSelectedHeading] = useState("");
  const [selectedSubHeading, setSelectedSubHeading] = useState([]);

  return (
    <>
    <div
        onClick={() => setOpenNav(false)}
        className={`${
          openNav
            ? "z-40 inset-0 bg-opacity-50"
            : "backdrop-blur-0 bg-opacity-0"
        } backdrop-blur-sm bg-black duration-500 lg:hidden fixed`}
      />
      <div
        className={` z-50
    lg:hidden bg-white fixed w-4/5 top-0 overflow-y-auto bottom-0 px-4
    duration-500 ${openNav ? "right-0" : "right-[-100%]"}
    `}
      >
        <div className="px-1 py-5 text-black w-20">
          <div className="text-3xl" onClick={() => setOpenNav(false)}>
            <IoClose />
          </div>
        </div>

        {navLinks.map((heading) => (
          <div key={heading.id}>
            <div className="px-3 md:cursor-pointer group">
              <p
                className="flex items-center justify-between py-4 pl-5 text-lg font-bold md:pl-0 group hover:cursor-pointer"
                onClick={() => {
                  selectedHeading !== heading.id
                    ? setSelectedHeading(heading.id)
                    : setSelectedHeading("");
                  setSelectedSubHeading("");
                }}
              >
                {!heading.submenu ? (
                  <Link to={heading.link} onClick={() => setOpenNav(false)}>
                    {heading.name}
                  </Link>
                ) : (
                  heading.name
                )}

                {heading.submenu ? (
                  <span
                    className={`text-xl inline duration-200 ${
                      selectedHeading === heading.id ? "rotate-180" : null
                    }`}
                  >
                    <IoChevronDown />
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            {heading.submenu && selectedHeading === heading.id ? (
              <MobileSubMenu
                selectedSubHeading={selectedSubHeading}
                setSelectedSubHeading={setSelectedSubHeading}
                sublinks={heading.sublinks}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileLinks;
