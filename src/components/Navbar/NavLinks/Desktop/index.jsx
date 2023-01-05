import { Link } from "react-router-dom";
import { navLinks } from "../MyLinks";

import DesktopSubMenu from "./DesktopSubMenu";

const DesktopLinks = () => {
  return (
    <ul className="items-center hidden lg:flex gap-14">
      {navLinks.map((heading) => (
        <div key={heading.name}>
          <div className="px-3 cursor-pointer group">
            <Link
              to={heading.link}
              className="flex items-center justify-between py-4 text-lg font-bold group"
            >
              {heading.name}
              
              {heading.submenu ? (
                <span className="text-xl px-1 flex items-center group-hover:rotate-180">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              ) : (
                ""
              )}
            </Link>

            {heading.submenu ? <DesktopSubMenu sublinks={heading.sublinks} key={heading.id}/> : ""}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default DesktopLinks;
