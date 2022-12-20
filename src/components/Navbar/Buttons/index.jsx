const NavButtons = () => {
  return (
    <div className="text-white flex gap-5 justify-end lg:w-44 text-3xl">
      <button className="flex items-center">
        <ion-icon name="person-outline"></ion-icon>
      </button>

      <button className="hidden md:flex items-center ">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
};

export default NavButtons;
