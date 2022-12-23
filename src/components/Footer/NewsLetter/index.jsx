import NewsLetterPic from "pics/NewsLetterxx.webp";

const NewsLetter = () => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row gap-12 container mx-auto justify-between py-12 px-5 border-spacing-8  max-w-5xl">
      <div className="flex flex-col justify-center gap-9">
        <div className="flex gap-3">
          {/* <span className="text-7xl">
          <ion-icon name="mail-outline"></ion-icon>
        </span> */}

          <div className="flex flex-col gap-4 sm:gap-6 pt-3 ">
            <p className="text-xl lg:text-3xl font-bold ">
              {" "}
              اولین کسی باش که از اخبار نجوم و فضا باخبر میشه
            </p>
            <p>
              عضو خبرناممون شو تا هر روز برات جدیدترین اخبار و اطلاعات رو ایمیل
              کنیم.
            </p>
            <form action="send" className="flex gap-3 flex-wrap">
              

              <input
                type="email"
                dir="ltr"
                name="subscribe"
                placeholder="آدرس ایمیل"
                className=" w-full sm:w-72 h-9 px-3 rounded-md text-black placeholder:text-right"
              />
              <input
                type="submit"
                value=" عضویت"
                className="w-full sm:w-24 h-9 rounded-md bg-gray-700 hover:bg-blue-700 hover:cursor-pointer duration-200"
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <img
          src={NewsLetterPic}
          alt="SpaceStation NewsLetter"
          className="w-3/4 md:w-full md:max-h-96 mx-auto  md:mx-0"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
