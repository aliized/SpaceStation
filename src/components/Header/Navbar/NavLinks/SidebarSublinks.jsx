import React from 'react'
import { Link } from 'react-router-dom'

const SidebarSublinks = ({heading,subHeading,setSubHeading,link}) => {
  return (
    <div
            className={`
            ${
              heading === link.name ? "md:hidden" : "hidden"
            }  bg-gray-100 rounded-lg 
          `}
          >
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pr-7 font-semibold pl-5 md:pl-0  flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    } bg-gray-200 rounded-lg py-2`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 mr-7 ml-2 pr-4 ">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default SidebarSublinks