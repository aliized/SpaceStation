import React, { useContext } from "react";

import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";

import DesktopUserMenu from "./desktop";

// import MobileUserMenu from "./mobile";

const UserMenu = () => {
  const { user } = useContext(BlogContext);
  // const [openUserMenu, setOpenUserMenu] = useState(false);
  return (
    <>
      <div className="group/UserMenu relative">
        <div
          className="flex items-center  text-sm"
          // onClick={() => setOpenUserMenu(true)}
        >
          {user.profilePic ? (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-10 h-10"
                src={`${SERVER_URL}/img/users/${user.profilePic}`}
                alt={user.fullname}
              />
            </>
          ) : (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-10 h-10"
                src={`${SERVER_URL}/img/users/defaultPic.webp`}
                alt={user.fullname}
              />
            </>
          )}
        </div>
        <DesktopUserMenu />
        {/* <MobileUserMenu openUserMenu={openUserMenu} setOpenUserMenu={setOpenUserMenu}/> */}
      </div>
    </>
  );
};

export default UserMenu;
