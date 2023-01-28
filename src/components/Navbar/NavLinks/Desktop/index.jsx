import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navLinks } from "../MyLinks";

import DesktopSubMenu from "./DesktopSubMenu";

const DesktopLinks = () => {
  return (
    <ul className="items-center hidden lg:flex gap-14">
      {navLinks.map((heading) => (
        <div key={heading.id}>
          <div className="group">
            <Link
              to={heading.link}
              className="flex items-center justify-between py-4 text-lg group"
            >
              {heading.name}
              
              {heading.submenu ? (
                <span className="text-xl px-1 flex items-center duration-100 group-hover:rotate-180">
                  
                  <IoChevronDown/>
                </span>
                

              ) : null}
            </Link>

            {heading.submenu ? <DesktopSubMenu sublinks={heading.sublinks} key={heading.id}/> : null}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default DesktopLinks;
