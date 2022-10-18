import NavLogo from "./NavLogo";
import Navlinks from "./NavLinks";
import NavButtons from "./NavBottons";

const Navbar = () => {
  
  let links = [
    {
    id: 1,
      name: "علم نجوم",
      link: "test",
      sub: [
        { id: 5, name: "معرفی نجوم و تاریخچه", link: "test" },
        { id: 6, name: " جهان ما", link: "test" },
        {
          id: 7,
          name: "کهکشان ها",
          link: "test",
          sub: [
            { id: 11, name: "کهکشان ما", link: "test" },
            { id: 12, name: "کهکشان های دیگر", link: "test" },
          ],
        },
        { id: 8, name: "منظومه ی شمسی", link: "test" },
        { id: 9, name: "سیاره ها", link: "test" },
        { id: 10, name: "رصد آسمان شب", link: "test" },
      ],
    },
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
