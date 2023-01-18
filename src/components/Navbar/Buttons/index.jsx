import { BlogContext } from "context/BlogContext";
import { useContext, useEffect, useState } from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const { setOpenModal, loggedIn } = useContext(BlogContext);
  const [userButton, setUserButton] = useState(null);
  useEffect(() => {
    const button = loggedIn ? (
      <Link to="/dashboard" className="flex items-center">
        <IoPersonOutline />
      </Link>
    ) : (
      <button onClick={() => setOpenModal(true)} className="flex items-center" name="loginButton">
        <IoPersonOutline />
      </button>
    );
    setUserButton(button);
  }, [loggedIn, setOpenModal]);
  return (
    <div className="text-white flex gap-5 justify-end lg:w-44 text-3xl">
      {userButton}

      <button className="hidden md:flex items-center"  name="searchButton">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default NavButtons;
