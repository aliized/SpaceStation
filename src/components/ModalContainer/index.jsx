import React from "react";

const ModalContainer = ({
  outsideClick = {},
  className = "",
  children = "",
}) => {
  return (
    <div className="fixed inset-0 flex justify-center overflow-y-auto bg-black backdrop-blur-sm bg-opacity-60 sm:items-center ">
      <div
        className={`w-full sm:h-auto min-h-[10rem] bg-white text-black sm:rounded-2xl sm:mx-auto sm:min-w-[10rem] sm:w-auto h-full ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
