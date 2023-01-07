import MainFrame from "components/containers/MainFrame";

import Dictionary from "assets/images/dynamic/Dictionary.webp";
const DictionaryBox = () => {
  return (
    <MainFrame bgColor={"bg-black"}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 lg:gap-14 py-8">
        <img src={Dictionary} alt="" className=" h-full" />
        <h4 className="text-3xl font-bold"> تلسکوپ و آسمان شب</h4>
        <div className="leading-7 ">
          <p>
            تلِسکوپ (به انگلیسی: Telescope) یا دوربین فضایی یا فرابین، وسیله‌ای
            برای دیدن اجرام آسمانی با استفاده از تابش الکترومغناطیس (به انگلیسی:
            Electromgnetic radiation) (مانند نور مرئی) به‌صورت واضح و دقیق است.
            نخستین فرابین کارا در ابتدای سدهٔ هفدهم و با استفاده از لنزهای
            شیشه‌ای در هلند اختراع شد. در درازای چند دهه، تلسکوپ (فرابین)
            بازتابی که از آینه استفاده می‌کرد اختراع شد؛ بسیاری از انواع نوتری
            از فرابین‌ها در سدهٔ ۲۰ میلادی زاده شدند. رادیوفرابین در دههٔ ۱۹۳۰ و
            فرابین فرابنفش در سال ۱۹۶۰ از جملهٔ این اختراعات بودند. واژهٔ تلسکوپ
            می‌تواند به تمام حیطهٔ وسایل عملیاتی در سرتاسر ناحیهٔ میدان
            الکترومغناطیس اشاره داشته باشد.
          </p>
        </div>
        <div className="flex justify-end w-full">
          <a
            href="link"
            className="bg-blue-700 text-white py-2 px-5 rounded-full"
          >
            ادامه مطلب
          </a>
        </div>
      </div>
    </MainFrame>
  );
};

export default DictionaryBox;
