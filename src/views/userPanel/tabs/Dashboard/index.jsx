import React, { useContext, useState } from "react";
import {
  IoPerson,
  IoPersonOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

import flyingRocket from "assets/images/flyingRocket.webp";
import { BlogContext } from "context/BlogContext";

const Dashboard = () => {
  const { user } = useContext(BlogContext);

  const [hovering, setHovering] = useState("security");

  return (
    <div className="px-4 md:py-4 flex flex-1 flex-col items-center">
      <div className="flex-1 ">
        <img
          src={flyingRocket}
          alt="flying-rocket"
          className="w-[25rem] mx-auto max-w-[70%]"
        />
      </div>
      <div className="flex-1 font-anjoman text-3xl md:text-4xl leading-relaxed font-[900]">
        <p>سلام {user.fullName} جان </p>
        <p>به ایستگاه فضایی خوش اومدی</p>
      </div>
      <div className="md:hidden  flex gap-2 flex-wrap py-6 px-2">

      <NavLink to="/user/account">
        {({ isActive }) => (
          <>
            <p
              className={`px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center 
                  bg-gray-900 hover:cursor-pointer md:hover:text-gray-200 text-gray-400 "
                `}
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

      <NavLink to="/user/settings">
        {({ isActive }) => (
          <p
            to="settings"
            className="px-5 py-4  duration-150 rounded-3xl flex gap-2 items-center
                  bg-gray-900 hover:cursor-pointer hover:text-gray-200 text-gray-400 "
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
      </div>
    </div>
  );
};

export default Dashboard;
