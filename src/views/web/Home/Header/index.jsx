const Header = () => {
    return (
      <div className="container mx-auto flex flex-col md:flex-row justify-end lg:justify-center ">
  
        <div className="h-[100vw] md:h-[28rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[45rem] w-full md:w-1/2 bg-headerBg bg-no-repeat bg-right-top bg-contain md:bg-[length:100%_auto] pb-20"></div>
  
        <div className="flex flex-col justify-center text-center mt-[-10vw] md:mt-0 max-w-md px-3 mx-auto pb-20 w-full md:w-1/2">
          <p className="text-3xl md:text-4xl font-semibold font-anjoman mb-8 p-3 border-solid border-b-8 gradborder">
            جایی برای نجومی ها!
          </p>
          <div className=" text-lg font-light">
            <p> زمانی که به ستاره ها می‌رسید،</p>
  
            <p>
              به دورترین چیزی که وجود دارد در حال نزدیک شدن هستید. درست مثل زمانی
              که به درون اعماق وجود خود می‌رسید{" "}
            </p>
            <p>اما در جهت معکوس!</p>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Header;
  
  // <div className="container mx-auto flex justify-end bg-headerBg bg-no-repeat bg-right-top  bg-contain pt-[90vw] md:pt-0 lg:h-[45rem] lg:bg-[length:60%]">
  // <div className=" flex px-4 pb-10 lg:w-1/2 flex-col justify-center items-center text-center">
  //   <p className="text-[2.2rem] font-bold mb-8 p-3 border-solid border-b-8 gradborder">
  //     جایی برای نجومی ها!
  //   </p>
  //   <div className="w-full md:w-[28rem] text-lg">
  //     <p> زمانی که به ستاره ها می‌رسید،</p>
  
  //     <p>
  //       به دورترین چیزی که وجود دارد در حال نزدیک شدن هستید. درست مثل زمانی
  //       که به درون اعماق وجود خود می‌رسید{" "}
  //     </p>
  //     <p>اما در جهت معکوس!</p>
  //   </div>
  // </div>
  // </div>
  