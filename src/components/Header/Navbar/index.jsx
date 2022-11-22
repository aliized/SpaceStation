import { useState } from "react";

//import NavLinks from "./NavLinks";
import NavButtons from "./NavBottons";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" h-20 bg-black md:text-white  text-black ">
      <div className="container mx-auto flex justify-between items-center p-5" >
      <div className="text-white md:w-auto h-7 md:hidden lg:block">
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <NavLogo />
      </div>

      <ul className="md:flex hidden items-center gap-14">
       

        <NavLinks />
      </ul>
      <ul
        className={`
        md:hidden bg-white fixed w-full  top-0 overflow-y-auto bottom-0 px-4
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
      >
       <div className="p-1 py-5 md:w-auto md:hidden lg:block text-black">
              <div
                className="text-3xl md:hidden"
                onClick={() => setOpen(!open)}
              >
                <ion-icon name="close"></ion-icon>
              </div>
            </div>
        <NavLinks />
      </ul>

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
//   <a href="/" className="py-7 px-3 inline-block">
//     Home
//   </a>
// </li>
// <NavLinks />
// </ul>
