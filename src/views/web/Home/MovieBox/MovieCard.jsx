import { SERVER_URL } from "config";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col md:flex-row w-full lg:w-auto mx-auto max-w-5xl lg:items-center gap-5 lg:gap-10">
      <div className="w-2/3 mx-auto md:w-1/3  rounded-3xl overflow-hidden aspect-[3/4] relative  ">
        <img
          src={`${SERVER_URL}/img/movies/${movie.thumbnail}`}
          alt={movie.name}
          className="w-full h-full object-cover border-2 border-white"
        />
      </div>

      <div className=" flex flex-col gap-2 md:w-2/3 px-4">
        <h3 className="text-2xl font-anjoman font-bold text-blue-700">
          {" "}
          فیلم {movie.name}
        </h3>
        <p className="font-bold text-gray-700">کارگردان: {movie.directors}</p>
        <p className="font-bold text-gray-700">امتیاز: 8.4</p>
        <p className="font-bold text-gray-700">نویسندگان: {movie.writers}</p>
        <p className="font-bold text-gray-700">بازیگران: {movie.actors}</p>
        <p className="font-bold text-gray-700">تاریخ انتشار: </p>
        <p className="font-bold text-gray-700">{movie.body}</p>
      </div>
    </div>
  );
};

export default MovieCard;
