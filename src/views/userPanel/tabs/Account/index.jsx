import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import { useContext } from "react";
import ProfilePic from "./ProfilePic";

const Account = () => {
  

  return (
    <div className="flex flex-col gap-4">
      <ProfilePic/>
      <div className="px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
        نام شما و بیوگرافی
        <p className="text-red-600 p-3">به زودی...</p>
      </div>
      
      <div className="px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
        حذف حساب کاربری
        <p className="text-red-600 p-3">به زودی...</p>

      </div>
    </div>
  );
};

export default Account;
