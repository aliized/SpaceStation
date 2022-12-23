import { SERVER_URL } from "config";
import MainFrame from "components/containers/MainFrame";

const MovieBox = ({
  movieName,
  photo,
  writers,
  directors,
  actors,
  content,
  movieId,
}) => {
  return (
    <MainFrame bgColor={"bg-black"}>
      <div className="flex flex-col max-w-5xl gap-8 px-2 py-2 mx-auto sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row">
        
          <div className="relative mx-auto overflow-hidden border-white border-none md:mx-0 rounded-t-xl md:rounded-xl aspect-[2/3] w-2/3 md:w-52 md:border-solid md:border-2">
            
            <img className="w-full h-full object-cover"
              src={`${SERVER_URL}/img/movies/${photo}`}
              alt={`تصویر فیلم ${movieName}`}
            />
            <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] md:bg-none"></div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="py-2 mb-2 text-xl font-bold">فیلم {movieName}</h4>
            <p>امتیاز: 8.4</p>
            <p>زبان: انگلیسی</p>
            <p>ژانر: علمی تخیلی، درام، </p>
            <p>سال انتشار: 2014</p>
            <p>محصول: انگلستان، آمریکا</p>
            <p>نویسنده: {writers}</p>
            <p>کارگردان: {directors}</p>
            <p>بازیگران: {actors}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 leading-loose">
          <p>{content}</p>
        </div>
        {/* <div className="flex justify-end w-full">
          <Link to={`/post/${movieId}`}
            className="px-5 py-2 text-white bg-blue-700 rounded-full"
          >
            ادامه مطلب
          </Link>
        </div> */}
      </div>
    </MainFrame>
  );
};

export default MovieBox;
