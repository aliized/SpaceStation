import React from "react";

const Err500 = () => {
  return (
    <div className="bg-[#ffcccb] text-black mx-auto py-10 px-16 rounded-2xl flex flex-col gap-4 items-center text-xl">
      {" "}
      <p>ارتباط با سرور درست برقرار نمیشه 😢 </p>{" "}
      <p>لطفا یک بار صفحه رو رفرش کن</p>
    </div>
  );
};

export default Err500;
