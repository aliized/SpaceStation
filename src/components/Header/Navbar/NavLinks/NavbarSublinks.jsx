import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSublinks = ({link}) => {
  return (<>

    {link.submenu && (
        <div >
          <div className="absolute top-16 hidden group-hover:md:block hover:md:block text-black">
            <div className="py-3">
              <div
                className="w-4 h-4 right-5 absolute 
              mt-1 bg-white rotate-45"
              ></div>
            </div>
            <div className="bg-white p-5 grid grid-cols-3 gap-10">
              {link.sublinks.map((mysublinks) => (
                <div>
                  <h1 className="text-lg font-semibold">
                    {mysublinks.Head}
                  </h1>
                  {mysublinks.sublink.map((slink) => (
                    <li className="text-sm text-gray-600 my-2.5">
                      <Link
                        to={slink.link}
                        className="hover:text-primary"
                      >
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
  </>
  )
}

export default NavbarSublinks