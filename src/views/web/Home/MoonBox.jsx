import MainFrame from "components/containers/MainFrame";
import Moon from "assets/images/dynamic/Moon1.webp";

const MoonBox = () => {
  return (
    <MainFrame bgColor={"bg-black"}>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 lg:gap-14 lg:py-8">

        <img src={Moon} alt="" className="px-2 h-full" />
        <h4 className="text-3xl font-bold">همه چیز درباره ی ماه</h4>
        <div className="leading-7 ">
          <h5 className="mb-3">پنجمین ماه بزرگ منظومه ی شمسی</h5>
          <p>
            ماه، تنها جایی در خارج از کره ی زمین است که بشر در آن قدم نهاده است.
            ماه به عنوان بزرگ‌ترین و درخشان ترین شی در آسمان شب ما، کره زمین را
            با تعدیل حرکت سیاره حول محور خود به مکان قابل سکونت تبدیل کرده است.
            ماه همچنین باعث به وجود آمدن جذر و مد می شود. به عقیده بسیاری از
            دانشمندان، احتمالا ماه از برخورد یک سنگ به اندازه سیاره مریخ با زمین
            در میلیاردها سال پیش شکل گرفته است.
          </p>
          <p>
            چون زمین و ماه از لحاظ ترکیب بسیار به هم شباهت دارند، پژوهشگران به
            این نتیجه رسیده‌اند که این برخورد حدود ۹۵ میلیون سال بعد از شکل‌گیری
            منظومه خورشیدی رخ داده ــ البته ۳۲ میلیون سال کمتر یا بیشتر. (منظومه
            خورشیدی تقریبا ۴/۶ میلیارد سال عمر دارد.)
          </p>
          <p>
            در سال ۲۰۱۵، پژوهش جدیدی به این نظریه وزن بیشتری داد؛ با استفاده از
            شبیه‌سازی گردش سیارات در منظومه خورشیدی اولیه و همچنین تفاوت کشف شده
            جدید در فراوانی عنصر تنگستن-۱۸۲ در زمین و ماه.
          </p>
        </div>
        <div className="flex justify-end w-full">
          <a href="link" className="bg-blue-700 text-white py-2 px-5 rounded-full">ادامه مطلب</a>
        </div>

      </div>
    </MainFrame>
  );
};


export default MoonBox;
