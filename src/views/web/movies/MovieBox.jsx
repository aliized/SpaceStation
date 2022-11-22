import { SERVER_URL } from "components/config";
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
      <div className="flex flex-col max-w-5xl gap-8 px-2 mx-auto sm:px-6">
        <h4 className="mx-auto text-3xl font-bold lg:mb-3">{movieName}</h4>
        <div className="w-full">
          <img
            className="object-cover w-full rounded-3xl aspect-video"
            src={`${SERVER_URL}/img/movies/${photo}`}
            alt={`تصویر فیلم ${movieName}`}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h5>نویسنده: {writers}</h5>
          <h5>کارگردان: {directors}</h5>
          <h5>بازیگران: {actors}</h5>

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
