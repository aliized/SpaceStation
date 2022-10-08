import logo from "../../../pics/smallLogo.png";

const NavLogo = () => {
  return (
    <div className=" flex items-center gap-3">
      <p>SpaceStation</p>
      <img src={logo} alt="ایستگاه فضایی" />
    </div>
  );
};

export default NavLogo;
