import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import React, { useContext, useState } from "react";
import DesktopUserMenu from "./desktop";
import MobileUserMenu from "./mobile";

const UserMenu = () => {
  const { user } = useContext(BlogContext);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  return (
    <>
      <div className="group/UserMenu relative">
        <div className="flex items-center  text-sm" onClick={()=>setOpenUserMenu(true)}>
          <img
            className="rounded-full overflow-hidden aspect-square w-10 h-10 my-2"
            src={`${SERVER_URL}/img/users/${user.profilePic}`}
            alt={user.fullname}
          />

        </div>
          <DesktopUserMenu />
          {/* <MobileUserMenu openUserMenu={openUserMenu} setOpenUserMenu={setOpenUserMenu}/> */}

      </div>
    </>
  );
};

export default UserMenu;
