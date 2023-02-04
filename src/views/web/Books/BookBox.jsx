import MainFrame from "components/containers/MainFrame";
import { SERVER_URL } from "config";

const BookBox = ({ bookName, photo, writer, content, bookId }) => {
  return (
    <MainFrame bgColor={"bg-black"}>
      <div className="flex flex-col max-w-5xl gap-8 px-2 py-2 mx-auto sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative mx-auto overflow-hidden border-white border-none md:mx-0 rounded-t-xl md:rounded-xl aspect-[3/4] w-2/3 md:w-52 md:border-solid md:border-2">
            <img
              className="h-full w-full object-cover"
              src={`${SERVER_URL}/img/books/${photo}`}
              alt={`تصویر کتاب ${bookName}`}
            />
            <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] md:bg-none"></div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="py-2 mb-2 text-3xl md:text-2xl font-bold font-anjoman">
              کتاب {bookName}
            </h4>
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

          {content}
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
