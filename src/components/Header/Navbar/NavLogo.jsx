import { Link } from "react-router-dom";

import logo from "pics/smallLogo.png";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className=" hidden lg:flex  items-center gap-3 md:cursor-pointer"
    >
      <p>SpaceStation</p>
      <img src={logo} alt="ایستگاه فضایی" />
    </Link>
  );
};

export default NavLogo;
