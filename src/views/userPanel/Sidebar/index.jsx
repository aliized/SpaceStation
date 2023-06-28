import React, { useContext, useState } from "react";
import {
  IoHome,
  IoHomeOutline, // IoLockClosed,
  // IoLockClosedOutline,
  IoLogOut,
  IoLogOutOutline,
  IoPerson,
  IoPersonOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import Swal from "sweetalert2";

const PanelSidebar = () => {
  const { user, logout } = useContext(BlogContext);

  const [hovering, setHovering] = useState("security");

  const handleLogout = async () => {
    const result = await Swal.fire({
      title:
        '<p class="font-anjoman font-bold text-xl">مطمئنی میخوای از اکانتت خارج بشی؟</p>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#9a9a9a",
      confirmButtonText: "بله، خارج شو",
      cancelButtonText: "لغو",
      customClass: {
        confirmButton: "font-vazir text-xl ",
        cancelButton: "font-vazir text-xl  ",
      },
    });

    if (result.isConfirmed) {
      logout();
    }
  };

  return (
    <div className="flex flex-col py-3 md:pt-10  md:pb-20 md:pl-2 md:w-60 font-medium font-anjoman ">
      <div className="px-5 py-4 flex md:flex-col items-center gap-2 border-b border-gray-800">
        {user.profilePic ? (
          <>
            <img
              className="overflow-hidden rounded-full aspect-square w-20 h-20"
              src={`${SERVER_URL}/img/users/${user.profilePic}`}
              alt={user.fullname}
            />
          </>
        ) : (
          <>
            <img
              className="overflow-hidden rounded-full aspect-square w-20 h-20"
              src={`${SERVER_URL}/img/users/defaultPic.webp`}
              alt={user.fullname}
            />
          </>
        )}

        <p className="text-2xl font-bold ">{user.fullName}</p>
      </div>
      <div className="fixed bottom-0 border-t border-gray-700 md:border-none w-full md:static md:w-auto bg-black flex flex-1 md:flex-col gap-1 md:gap-2 py-2 items-center md:items-stretch justify-around ">
        <NavLink to="dashboard">
          {({ isActive }) => (
            <p
              className={` px-5 py-4 duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "md:bg-gray-800 text-gray-200"
                  : "md:hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
              }`}
              onMouseEnter={() => setHovering("dashboard")}
              onMouseLeave={() => setHovering("")}
            >
              <span className="text-2xl">
                {isActive || hovering === "dashboard" ? (
                  <IoHome />
                ) : (
                  <IoHomeOutline />
                )}
              </span>
              <span className="hidden md:block">داشبورد</span>
            </p>
          )}
        </NavLink>
        <NavLink to="account">
          {({ isActive }) => (
            <>
              <p
                className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                  isActive
                    ? "md:bg-gray-800 text-gray-200"
                    : "hover:bg-gray-900 hover:cursor-pointer md:hover:text-gray-200 text-gray-400 "
                }`}
                onMouseEnter={() => setHovering("account")}
                onMouseLeave={() => setHovering("")}
              >
                <span className="text-2xl">
                  {isActive || hovering === "account" ? (
                    <IoPerson />
                  ) : (
                    <IoPersonOutline />
                  )}
                </span>
                <span className="hidden md:block">حساب کاربری </span>
              </p>
            </>
          )}
        </NavLink>
        {/* <NavLink to="security">
          {({ isActive }) => (
            <p
              to="security"
              className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "md:bg-gray-800 text-gray-200"
                  : "md:hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
              }`}
              onMouseEnter={() => setHovering("security")}
              onMouseLeave={() => setHovering("")}
            >
              <span className="text-2xl">
                {isActive || hovering === "security" ? (
                  <IoLockClosed />
                ) : (
                  <IoLockClosedOutline />
                )}
              </span>
              <span className="hidden md:block">

              امنیت{" "}
              </span>
            </p>
          )}
        </NavLink> */}

        <NavLink to="settings">
          {({ isActive }) => (
            <p
              to="settings"
              className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "md:bg-gray-800 text-gray-200"
                  : "md:hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
              }`}
              onMouseEnter={() => setHovering("settings")}
              onMouseLeave={() => setHovering("")}
            >
              <span className="text-2xl">
                {isActive || hovering === "settings" ? (
                  <IoSettings />
                ) : (
                  <IoSettingsOutline />
                )}
              </span>
              <span className="hidden md:block">تنظیمات</span>
            </p>
          )}
        </NavLink>
        <button
          type="button"
          className="px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center text-red-400 hover:bg-red-500 hover:bg-opacity-20 hover:cursor-pointer hover:text-white"
          onClick={handleLogout}
          onMouseEnter={() => setHovering("logout")}
          onMouseLeave={() => setHovering("")}
        >
          <span className="text-2xl">
            {hovering === "logout" ? <IoLogOut /> : <IoLogOutOutline />}
          </span>
          <span className="hidden md:block">خروج</span>
        </button>
      </div>
    </div>
  );
};

export default PanelSidebar;
