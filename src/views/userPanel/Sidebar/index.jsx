import React, { useContext, useState } from "react";
import {
  IoHome,
  IoHomeOutline,
  IoLockClosed,
  IoLockClosedOutline,
  IoLogOut,
  IoLogOutOutline,
  IoPerson,
  IoPersonOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";

const PanelSidebar = () => {
  const { user, logout } = useContext(BlogContext);

  const [hovering, setHovering] = useState("security");

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="pt-10 pb-20 pl-2 w-60 font-medium font-anjoman ">
      <div className="px-5 py-4 flex flex-col items-center gap-2 border-b border-gray-800">
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
      <div className="grid gap-2 py-2">
        <NavLink to="dashboard">
          {({ isActive }) => (
            <p
              className={`px-5 py-4 duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "bg-gray-800 text-gray-200"
                  : "hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
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
              داشبورد
            </p>
          )}
        </NavLink>
        <NavLink to="account">
          {({ isActive }) => (
            <>
              <p
                className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                  isActive
                    ? "bg-gray-800 text-gray-200"
                    : "hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
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
                حساب کاربری{" "}
              </p>
            </>
          )}
        </NavLink>
        <NavLink to="security">
          {({ isActive }) => (
            <p
              to="security"
              className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "bg-gray-800 text-gray-200"
                  : "hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
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
              امنیت{" "}
            </p>
          )}
        </NavLink>

        <NavLink to="settings">
          {({ isActive }) => (
            <p
              to="settings"
              className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center ${
                isActive
                  ? "bg-gray-800 text-gray-200"
                  : "hover:bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
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
              تنظیمات
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
          خروج
        </button>
      </div>
    </div>
  );
};

export default PanelSidebar;
