import React, { useEffect, useState } from "react";
import { IoEye, IoEyeOff, IoLockClosed, IoPerson } from "react-icons/io5";

import { ErrorMessage, Field } from "formik";

const FormInput = ({
  label = "بدون نام",
  type = "text",
  placeHolder = "",
  name,
  error,
  touched,
}) => {
  const [pwdShow, setPwdShow] = useState(true);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    switch (type) {
      case "password":
        setPwdShow(false);
        setIcon(<IoLockClosed />);
        break;
      case "email":
        setIcon(<IoPerson />);
        break;

      default:
        setIcon(<IoPerson />);
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
        <div className="text-xl pb-2 px-1 text-gray-500 ">{icon}</div>

        <Field
          id={name}
          type={!pwdShow ? "password" : "text"}
          name={name}
          placeholder={placeHolder}
          className="leading-tight focus-visible:outline-none bg-none w-full peer"
          // onChange={(e) => {
          //   setState(e.target.value);
          // }}
          // value={state}
        />

        {type === "password" ? (
          <button
            type="button"
            onClick={() => setPwdShow(!pwdShow)}
            className="hover:text-gray-700 text-xl flex justify-center items-center text-gray-300 px-1"
          >
            {pwdShow ? <IoEyeOff className="text-gray-600" /> : <IoEye />}
          </button>
        ) : (
          ""
        )}

        <div
          className={` h-[2px] absolute -bottom-[2px]  duration-300  peer-focus:w-full 
          ${touched ? "w-full" : "w-0"} 
          ${
            error
              ? "bg-red-600"
              : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }
         `}
        ></div>
      </div>
      <div className="text-red-600 text-sm px-2 py-1 h-7 w-full">
        {error ? (
          <ErrorMessage name={name} render={(msg) => <p>{msg}</p>} />
        ) : null}
      </div>
    </div>
  );
};

export default FormInput;
