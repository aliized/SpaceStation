import { useContext } from "react";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import Swal from "sweetalert2";

const DesktopUserMenu = () => {
  const { logout, user } = useContext(BlogContext);
  
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
    <div className="absolute hidden group-hover/UserMenu:block z-50 text-black shadow-md -left-4">
      {/* <div className="absolute hidden md:group-hover/UserMenu:block z-50 text-black shadow-md -left-3"> */}
      <div className="flex justify-end ml-4">
        <div className="text-white border-b-[1rem] border-x-[1rem] border-x-transparent border-solid border-white w-0 border-opacity-90"></div>
      </div>

      <div className=" bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-md text-sm flex flex-col w-56 overflow-hidden">
        <div className="pb-2 pt-4 flex flex-col items-center px-8">
          {user.profilePic ? (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-16 h-16"
                src={`${SERVER_URL}/img/users/${user.profilePic}`}
                alt={user.fullname}
              />
            </>
          ) : (
            <>
              <img
                className="overflow-hidden rounded-full aspect-square w-16 h-16"
                src={`${SERVER_URL}/img/users/defaultPic.webp`}
                alt={user.fullname}
              />
            </>
          )}
          <Link
            className=" pt-1 px-8 text-xl font-bold font-anjoman"
            to="user/dashboard"
          >
            {user.fullName}
          </Link>
        </div>
        <div className="flex flex-col items-stretch text-center">
          <Link
            to="user/dashboard"
            className="flex justify-center items-center gap-1 py-3 border-t border-gray-300 px-8"
          >
            <span className="text-lg">
              <IoPersonOutline />
            </span>
            پنل کاربری
          </Link>
          <Link
            to="user/settings"
            className="flex justify-center items-center gap-1 py-3 border-t border-gray-300 px-8"
          >
            <span className="text-lg">
              <IoSettingsOutline />
            </span>
            تنظیمات
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="border-t text-red-600 border-gray-300 duration-150 hover:bg-opacity-70 bg-red-200 bg-opacity-40 py-3 flex justify-center items-center gap-1"
          >
            <span className="text-lg">
              <IoLogOutOutline />
            </span>
            خروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopUserMenu;
