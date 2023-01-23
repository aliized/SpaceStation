import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import { useContext, useEffect, useState } from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const { setOpenModal, loggedIn,user } = useContext(BlogContext);
  const [userButton, setUserButton] = useState(null);
  useEffect(() => {
    const button = loggedIn ? (
      <Link to="/dashboard" className="flex items-center">
          <img
            className="rounded-full overflow-hidden aspect-square w-10 h-10"
            src={`${SERVER_URL}/img/users/${user.profilePic}`}
            alt={user.fullname}
          />
      </Link>
    ) : (
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center w-10"
        name="loginButton"
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
