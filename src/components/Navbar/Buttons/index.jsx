import { useContext, useEffect, useState } from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";

import { BlogContext } from "context/BlogContext";

import UserMenu from "./UserMenu";

const NavButtons = () => {
  const { setOpenModal, loggedIn, user } = useContext(BlogContext);
  const [userButton, setUserButton] = useState(null);
  useEffect(() => {
    const button = loggedIn ? (
      <UserMenu />
    ) : (
      <button
        onClick={() => setOpenModal(true)}
        name="loginButton"
        className="flex items-center w-10"
      >
        <IoPersonOutline />
      </button>
    );
    setUserButton(button);
  }, [loggedIn, setOpenModal, user]);
  return (
    <div className="text-white flex gap-4 justify-end lg:w-44 text-[2rem]">
      <button className="hidden md:flex items-center" name="searchButton">
        <IoSearchOutline />
      </button>
      {userButton}
    </div>
  );
};

export default NavButtons;
