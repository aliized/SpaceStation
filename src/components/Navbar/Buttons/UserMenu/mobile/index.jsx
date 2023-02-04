// import { useRef } from "react";
// import { useContext, useEffect, useState } from "react";
// import {
//     IoClose,
//     IoLogOutOutline,
//     IoPersonOutline,
//     IoSettingsOutline,
// } from "react-icons/io5";
// import { Link } from "react-router-dom";

// import { SERVER_URL } from "config";
// import { BlogContext } from "context/BlogContext";

// const MobileUserMenu = ({ openUserMenu, setOpenUserMenu }) => {
//     const { user, logout } = useContext(BlogContext);

//     return (
//         <>
//             <div
//                 onClick={() => setOpenUserMenu(false)}
//                 className={`${
//                     openUserMenu
//                         ? "z-40 inset-0 bg-opacity-50"
//                         : "backdrop-blur-0 bg-opacity-0"
//                 } backdrop-blur-sm bg-black duration-500 md:hidden fixed`}
//             />
//             <div
//                 className={`z-50
//     md:hidden bg-white fixed w-4/5 top-0 overflow-y-auto bottom-0
//     duration-500 text-black text-base ${
//         openUserMenu ? "left-[0]" : "left-[-100%]"
//     }
//     `}
//             >
//                 <div className="hover:cursor-pointer w-20 px-5 py-5">
//                     <div
//                         className="text-3xl"
//                         onClick={() => setOpenUserMenu(false)}
//                     >
//                         <IoClose />
//                     </div>
//                 </div>

//                 <div className="p-2 flex flex-col items-center px-8">
//                     {user.profilePic ? (
//                         <>
//                             <img
//                                 className="overflow-hidden rounded-full aspect-square w-20 h-20"
//                                 src={`${SERVER_URL}/img/users/${user.profilePic}`}
//                                 alt={user.fullname}
//                             />
//                         </>
//                     ) : (
//                         <>
//                             <img
//                                 className="overflow-hidden rounded-full aspect-square w-20 h-20"
//                                 src={`${SERVER_URL}/img/users/defaultPic.webp`}
//                                 alt={user.fullname}
//                             />
//                         </>
//                     )}
//                     <Link
//                         className=" py-2 px-8 text-xl font-bold"
//                         to="dashboard"
//                     >
//                         {user.fullName}
//                     </Link>
//                 </div>
//                 <div className="flex flex-col items-stretch text-center">
//                     <Link
//                         to="dashboard"
//                         className="flex justify-center items-center gap-1 py-3 border-t border-gray-200 px-8"
//                     >
//                         <span className="text-lg">
//                             <IoPersonOutline />
//                         </span>
//                         پنل کاربری
//                     </Link>
//                     <Link
//                         to="dashboard"
//                         className="flex justify-center items-center gap-1 py-3 border-t border-gray-200 px-8"
//                     >
//                         <span className="text-lg">
//                             <IoSettingsOutline />
//                         </span>
//                         تنظیمات
//                     </Link>

//                     <button
//                         type="button"
//                         onClick={logout}
//                         className="border-t text-red-600 border-gray-200 duration-150 hover:bg-opacity-70 bg-red-200 bg-opacity-40 py-3 flex justify-center items-center gap-1"
//                     >
//                         <span className="text-lg">
//                             <IoLogOutOutline />
//                         </span>
//                         خروج
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MobileUserMenu;
