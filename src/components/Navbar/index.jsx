import { useContext } from "react";

import { BlogContext } from "context/BlogContext";
import NavButtons from "./Buttons";
import NavLogo from "./Logo";
import DesktopLinks from "./NavLinks/Desktop";
import MobileLinks from "./NavLinks/Mobile";

import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const { openNav, setOpenNav } = useContext(BlogContext);

  return (
    <nav className=" text-black bg-black lg:text-white">
      <div className="container flex items-center justify-between py-2 px-4 mx-auto  h-16">
        <div
          className="text-3xl text-white lg:hidden flex"
          onClick={() => setOpenNav(!openNav)}
        >
          <IoMenuOutline />
        </div>

        <NavLogo />

        <DesktopLinks />
        <MobileLinks />

        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;

//  <ul
// className={`
// md:hidden bg-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
// duration-500 ${open ? "left-0" : "left-[-100%]"}
// `}
// >
// <li>
//   <a href="/" className="inline-block px-3 py-7">
//     Home
//   </a>
// </li>
// <NavLinks />
// </ul>
