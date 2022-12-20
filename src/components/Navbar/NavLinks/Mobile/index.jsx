import { BlogContext } from "context/BlogContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MobileSubMenu from "./MobileSubMenu";

import { navLinks } from "../MyLinks";

const MobileLinks = () => {
  const { openNav, setOpenNav } = useContext(BlogContext);
  const [selectedHeading, setSelectedHeading] = useState("");
  const [selectedSubHeading, setSelectedSubHeading] = useState([]);

  return (
    <ul
      className={` z-50
    lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 px-4
    duration-500 ${openNav ? "right-0" : "right-[-100%]"}
    `}
    >
      <div className="px-1 py-5 text-black w-auto">
        <div className="text-3xl" onClick={() => setOpenNav(!openNav)}>
          <ion-icon name="close"></ion-icon>
        </div>
      </div>

      {navLinks.map((heading) => (
        <div key={heading.name}>
          <div className="px-3 md:cursor-pointer group">
            <p
              className="flex items-center justify-between py-4 pl-5 text-lg font-bold md:pl-0 group"
              onClick={() => {
                selectedHeading !== heading.name
                  ? setSelectedHeading(heading.name)
                  : setSelectedHeading("");
                setSelectedSubHeading("");
              }}
            >
            {!heading.submenu?(<Link to={heading.link} onClick={() => setOpenNav(false)}>{heading.name}</Link>):heading.name}
              

              {heading.submenu ? (
                <span className="inline text-xl md:hidden">
                  <ion-icon
                    name={`${
                      selectedHeading === heading.name
                        ? "chevron-up"
                        : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          {heading.submenu && selectedHeading === heading.name ? (
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
    </ul>
  );
};

export default MobileLinks;
