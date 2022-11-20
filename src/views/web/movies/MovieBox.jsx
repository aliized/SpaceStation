import MainFrame from "components/containers/MainFrame";

import Moon from "pics/dynamic/Moon1.png";
import { Link } from "react-router-dom";

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
      <div className="max-w-5xl px-2 sm:px-6 flex flex-col mx-auto gap-8">
        <h4 className="text-3xl font-bold mx-auto lg:mb-3">{movieName}</h4>
        <div className="w-full">
          <img
            className="rounded-3xl aspect-video object-cover w-full"
            src={`http://localhost:9000/img/movies/${photo}`}
            alt={`تصویر فیلم ${movieName}`}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h5>نویسنده: {writers}</h5>
          <h5>کارگردان: {directors}</h5>
          <h5>بازیگران: {actors}</h5>

          <p>{content}</p>
        </div>
        <div className="flex justify-end w-full">
          <Link to={`/post/${movieId}`}
            className="bg-blue-700 text-white py-2 px-5 rounded-full"
          >
            ادامه مطلب
          </Link>
        </div>
      </div>
    </MainFrame>
  );
};

export default MovieBox;
