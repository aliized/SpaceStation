const Header = () => {
  return (
    <div className="container mx-auto flex justify-end bg-headerBg bg-no-repeat bg-right bg-60%">
      <div className=" flex w-1/2 h-[50rem] flex-col justify-center items-center text-center">
        <p className="text-[2.2rem] font-bold mb-8 p-3 border-solid border-b-8 gradborder">
          جایی برای نجومی ها!
        </p>
        <div className="w-[28rem] text-lg">
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
