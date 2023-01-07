import React, { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoLockClosed,IoPerson} from "react-icons/io5";

const FormInput = ({ label = "بدون نام", state, setState, type = "text" }) => {
  const [passShow, setPassShow] = useState(true);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    switch (type) {
      case "password":
        setPassShow(false);
        setIcon(<IoLockClosed/>)
        break;
      case "email":
        setIcon(<IoPerson/>)
        break;
    
      default:
        setIcon(<IoPerson/>)
        break;
    }
    
  }, [type]);

  return (
    <div>
      <label htmlFor="password" className="opacity-100">
        {label}
      </label>

      <div
        dir="ltr"
        className=" flex items-center relative h-12 border-b-2 border-gray-300"
      >
        <div className="text-xl pb-2 px-1 text-gray-500 ">
        {icon}
        </div>


        <input
          type={!passShow ? "password" : "text"}
          name="password"
          placeholder="********"
          className="leading-tight focus-visible:outline-none bg-none w-full peer"
          onChange={(e) => {
            setState(e.target.value);
          }}
          value={state}
        />

        {type === "password" ? (
          <button
            onClick={() => setPassShow(!passShow)}
            className="hover:text-gray-700 text-xl flex justify-center items-center text-gray-300 px-1"
          >
            {passShow ? <IoMdEyeOff className="text-gray-600" /> : <IoMdEye />}
          </button>
        ) : (
          ""
        )}

        <div
          className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[2px] absolute -bottom-[2px]  duration-300  peer-focus:w-full ${
            state ? "w-full" : "w-0"
          }
         `}
        ></div>
      </div>
    </div>
  );
};

export default FormInput;
