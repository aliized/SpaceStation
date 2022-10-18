import book1 from "../pics/dynamic/book1.png";
const BookBox = () => {
  return (
    <div className="container lg:py-20 lg:px-40 mx-auto flex flex-col justify-center items-center gap-7 text-black ">
      <h4 className="text-3xl font-bold">کتاب های نجومی</h4>
      <p className="text-2xl font-bold text-center">
        کتاب چشم اندازی به شگفتی های نجوم(ستاره ها و سیاره ها)
      </p>
      <div className=" flex flex-col-reverse lg:flex-row items-center ">
        <div className="flex lg:w-2/3">
          <div className="flex flex-col gap-4 font-medium text-lg pt-4 pb-10 px-6 lg:px-32 leading-8 text-gray-700">
            <p>
              کتاب چشم‌اندازی به شگفتی‌های نجوم (ستاره‌ها و سیاره‌ها) نوشته
              سیمون هولند از مجموعه چشم‌اندازی به شگفتی‌های جهان به معرفی دنیای
              هیجان‌انگیز سیارات و ستاره‌ها برای کودکان و نوجوانان پرداخته است.
              این کتاب به صورت مصور و کاملا رنگی است.
            </p>
            <p>
              سیمون هولند (simon Holland) با توجه به اینکه کیهان‌شناسی یکی از
              قدیمی‌ترین علوم حتی در تمدن‌های اولیهٔ بشری است در کتاب چشم‌اندازی
              به شگفتی‌های نجوم (ستاره‌ها و سیاره‌ها) (Stars and planets) به
              پردازش این اجرام که در فضا هستند و به واسطه فاصله خیلی زیادی که از
              ما دارند برای ما مثل نقطه‌های خیلی کوچک به نظر می‌رسند، پرداخته تا
              به کودکان کمک کند بتوانند دنیای اطراف خود را بهتر درک و کشف کنند.
            </p>
            <div className="flex justify-end">
            <a href="link" className="bg-blue-700 text-white py-2 px-5 rounded-full"> کتاب های بیشتر</a>

            </div>
          </div>
        </div>
        <div className=" rounded-large lg:w-1/3">
          <img src={book1} alt="کتاب" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default BookBox;
