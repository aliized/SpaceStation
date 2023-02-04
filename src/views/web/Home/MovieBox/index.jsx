import { useContext } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import LoadingMovieCard from "components/Loading/home/LoadingMovieCard";
import MultiRenderer from "components/MultiRenderer";
import MainFrame from "components/containers/MainFrame";
import { BlogContext } from "context/BlogContext";

import MovieCard from "./MovieCard";

const MovieBox = () => {
  const { loading, movies } = useContext(BlogContext);

  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="text-3xl md:text-4xl font-anjoman font-bold flex justify-center mb-14">
        <p>فیلم های نجومی</p>
      </div>
      <div className="flex flex-col gap-12 ">
        {!loading && movies.length ? (
          <>
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </>
        ) : (
          <MultiRenderer times={3}>
            <LoadingMovieCard />
          </MultiRenderer>
        )}
      </div>
      <div className="flex justify-center pt-8 pb-4 ">
        <Link
          to="movies"
          className="text-blue-600 font-bold flex items-center gap-1 text-lg"
        >
          فیلم های بیشتر
          <IoChevronBackOutline />
        </Link>
      </div>
    </MainFrame>
  );
};

export default MovieBox;
