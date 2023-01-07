import { Link } from "react-router-dom";

import logo from "assets/images/LogoTextColored.webp";

const NavLogo = () => {
  return (
    <Link to="/" className="cursor-pointer h-full ">
      <img src={logo} alt="ایستگاه فضایی" className="h-full object-contain" />
    </Link>
  );
};

export default NavLogo;
