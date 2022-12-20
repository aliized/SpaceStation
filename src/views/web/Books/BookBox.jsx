import { SERVER_URL } from "config";
import MainFrame from "components/containers/MainFrame";

const BookBox = ({
  bookName,
  photo,
  writer,
  directors,
  actors,
  content,
  bookId,
}) => {
  return (
    <MainFrame bgColor={"bg-black"}>
      <div className="flex flex-col max-w-5xl gap-8 px-2 py-2 mx-auto sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative mx-auto overflow-hidden border-white border-none md:mx-0 rounded-t-xl md:rounded-xl aspect-[3/4] w-2/3 md:w-52 md:border-solid md:border-2">
            <img
              className="h-full w-full object-cover"
              src={`${SERVER_URL}/img/books/${photo}`}
              alt={`تصویر فیلم ${bookName}`}
            />
            <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] md:bg-none"></div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="py-2 mb-2 text-xl font-bold">کتاب {bookName}</h4>
            <p>امتیاز: 8.4</p>
            <p>ژانر: علمی تخیلی، درام، </p>
            <p>سال انتشار: 1397</p>
            <p>ناشر: میلکان</p>
            <p>نویسنده: {writer}</p>
            <p>مترجم: {writer}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {/* <p className=" leading-loose"> {content}</p> */}
         
          <h4 >

معرفی کتاب اسرار کیهانی اثر نیل دگراس تایسن
</h4>
<p>
هیچ‌کس نمی‌تواند منکر این حقیقت شود که کیهان و جهان هستی به‌عنوان گنجینه‌ای از پرسش‌های بی‌پایان در ذهن کنجکاو جمعی ما جایگاه خاصی دارد. از طرفی، این حقیقت حاکی از آن است که کیهان منبعی از جهل بی‌پایان جمعی ما نیز محسوب می‌شود. عجیب نیست که آسمان‌ها در طول هزاران سال در معنای لغوی و معنوی به‌عنوان خانه‌ی اکثر خدایان تصور شده‌اند و مورد عبادت قرار گرفته‌اند. یکی از کارهای مشترک خدایان کنترل تمام عناصر به‌ظاهر اسرارآمیز در ذهن‌های فانی و خارج از کنترل جسم‌های میرای ماست.

</p>
<p>
در شکاف میان اعماق کنجکاوی انسان و محدودیت‌های جهل او، مجموعه‌ای از پرسش‌ها وجود دارد که همه‌ی ما آن‌ها را پرسیده‌ایم یا آن‌ها را از ما پرسیده‌اند. اما هیچ‌کس پاسخی برای این پرسش‌ها ندارد. پاسخ‌های احتمالی نیز شاید ناقص یا ناکافی باشند. برای مابقی پرسش‌ها می‌توانیم به زمین اطرافمان و آسمان‌ها بنگریم تا، با اطمینان و کمی حس غرور، اعلام کنیم حداقل بخشی از این کائنات برای ذهن انسان قابل شناخت است. اما باید متواضعانه این را هم در نظر بگیریم که هم‌زمان با رشد دانشمان، وسعت جهلمان نیز افزایش می‌یابد.

</p>
<p>

نیل دگراس تایسون (Neil deGrasse Tyson) در کتاب اسرار کیهانی (Cosmic Queries) که آن را با همکاری جیمز ترفیل (James Trefil) نوشته به عمیق‌ترین پرسش‌هایی می‌پردازد که تابه‌حال درباره‌ی کیهان و جهان هستی پرسیده شده است. اما این صفحات به درون گرداب شک و تردید نفوذ خواهند کرد و شما را از پا در بالای گسل دانسته‌هایتان آویزان می‌کنند. چرا؟ زیرا در زیر این گسل منبع حقیقی کنجکاوی و شگفتی قرار دارد: ندانستن با تنها پادزهرش، یعنی نیاز به دانستن، روش‌ها و ابزاری علمی را تقویت می‌کند تا در مرز کائنات به کار روند.
</p>
        </div>
        {/* <div className="flex justify-end w-full">
          <Link to={`/post/${bookId}`}
            className="px-5 py-2 text-white bg-blue-700 rounded-full"
          >
            ادامه مطلب
          </Link>
        </div> */}
      </div>
    </MainFrame>
  );
};

export default BookBox;
