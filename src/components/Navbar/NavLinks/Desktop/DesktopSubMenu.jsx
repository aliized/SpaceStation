import React from "react";
import { Link } from "react-router-dom";

const DesktopSubMenu = ({ sublinks }) => {
  return (
    <>
      <div className="absolute hidden group-hover:block z-50 text-black shadow-md">
        <div className="mr-5">
          <div className="text-white border-b-[1rem] border-x-[1rem] border-x-transparent border-solid border-white w-0 border-opacity-90"></div>
        </div>

        <div className=" bg-white bg-opacity-90 backdrop-blur-sm p-5 grid grid-cols-3 gap-10 shadow-lg rounded-md">
          {sublinks.map((subHeading) => (
            <div key={subHeading.id}>
              <h5 className="text-lg font-medium font-anjoman text-gray-700 mb-2">
                {subHeading.Head}
              </h5>
              <div
                className="border-r-2 border-gray-500 border-opacity-30 pr-4 py-1 text-sm text-gray-700 flex flex-col gap-3"
                
              >
                {subHeading.sublink.map((slink) => (
                  <Link className="group/links" key={slink.id} to={slink.link}>
                    <p className="inline-block group-hover/links:scale-105 duration-75 group-hover/links:text-gray-900">
                      {slink.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopSubMenu;
