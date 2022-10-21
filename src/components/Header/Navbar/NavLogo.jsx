import logo from "../../../pics/smallLogo.png";

const NavLogo = () => {
  return (
    <a
      href="/"
      className=" hidden lg:flex  items-center gap-3 md:cursor-pointer"
    >
      <p>SpaceStation</p>
      <img src={logo} alt="ایستگاه فضایی" />
    </a>
  );
};

export default NavLogo;
