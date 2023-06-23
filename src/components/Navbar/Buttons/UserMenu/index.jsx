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
      <div className="group/UserMenu relative h-[34px]">
        
          {user.profilePic ? (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-7 md:w-auto h-7 m-[2px]"
                src={`${SERVER_URL}/img/users/${user.profilePic}`}
                alt={user.fullname}
              />
            </>
          ) : (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-7 h-7"
                src={`${SERVER_URL}/img/users/defaultPic.webp`}
                alt={user.fullname}
              />
            </>
          )}
        <DesktopUserMenu />
        {/* <MobileUserMenu openUserMenu={openUserMenu} setOpenUserMenu={setOpenUserMenu}/> */}
      </div>
    </>
  );
};

export default UserMenu;
