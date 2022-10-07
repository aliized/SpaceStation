import NavLogo from "./NavLogo";
import Navlinks from "./NavLinks";
import NavButtons from "./NavBottons";

const Navbar = () => {



  let links = [
    { id: 1, name: "علم نجوم" },
    { id: 2, name: "فیلم/کتاب" },
    { id: 3, name: "گالری عکس" },
    { id: 4, name: "اخبار" },
  ];



  return (
    <div className="container mx-auto flex justify-between items-center h-24 ">
      <NavLogo />
      <Navlinks links={links} />
      <NavButtons />
    </div>
  );
};

export default Navbar;
