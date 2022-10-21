import React, { useState } from "react";
import { links } from "./MyLinks";
import NavbarSublinks from "./NavbarSublinks";
import SidebarSublinks from "./SidebarSublinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 md:cursor-pointer group">
            <h1
              className="py-4 flex justify-between items-center md:pl-0 pl-5 group font-bold text-lg"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link.submenu ? (
                <div>
                  <span className="text-xl md:hidden inline">
                    <ion-icon
                      name={`${
                        heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                    ></ion-icon>
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </div>
              ) : (
                ""
              )}
            </h1>
            <NavbarSublinks
              link={link}
            />
          </div>

          {/* mobile sidebar */}
          <SidebarSublinks
            subHeading={subHeading}
            setSubHeading={setSubHeading}
            heading={heading}
            link={link}
          />
        </div>
      ))}
    </>
  );
};

export default NavLinks;

//       {/* {links.map((link) => (
//         <a href="link">{link.name}</a>
//       ))} */}
