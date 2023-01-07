import { BlogContext } from "context/BlogContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileSubMenu = ({
  selectedSubHeading,
  setSelectedSubHeading,
  sublinks,
}) => {
  const {setOpenNav } = useContext(BlogContext);

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

              <span className="text-xl md:mt-1 md:ml-2 inline">
                <ion-icon
                  name={`${
                    selectedSubHeading === slinks.id
                      ? "chevron-up"
                      : "chevron-down"
                  }`}
                ></ion-icon>
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
