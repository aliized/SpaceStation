import React from "react";
import { Link } from "react-router-dom";

const DesktopSubMenu = ({ sublinks }) => {
  return (
    <>
      <div className="absolute hidden group-hover:block z-50 text-black">
        <div className="py-2 ">
          <div
            className="w-4 h-4 right-5 absolute 
               bg-white rotate-45 "
          ></div>
        </div>


        <div className="bg-white p-5 grid grid-cols-3 gap-10 shadow-lg rounded-md">

          {sublinks.map((subHeading) => (
            <div>
              <h5 className="text-lg font-semibold">{subHeading.Head}</h5>

              {subHeading.sublink.map((slink) => (
                <li className="text-sm text-gray-600 my-2.5">
                  <Link to={slink.link}>
                    {slink.name}
                  </Link>
                </li>
              ))}

            </div>
          ))}

        </div>



      </div>
    </>
  );
};

export default DesktopSubMenu;
