import { useContext } from "react";

import { BlogContext } from "context/BlogContext";

import MovieBox from "./MovieBox";
import Loading from "components/Loading";

const Movies = () => {
  const { movies } = useContext(BlogContext);

  return (
    <>
      <div className=" mx-auto bg-bgSpaceHotel  bg-no-repeat bg-cover h-[55vw]"></div>
      <div className="bg-white py-16 flex flex-col gap-10">
        {movies.length ? (
          movies.map((movie) => (
            <MovieBox
              key={movie._id}
              movieName={movie.name}
              directors={movie.directors}
              writers={movie.writers}
              photo={movie.thumbnail}
              content={movie.body}
              movieId={movie._id}
            />
          ))
        ) : (
          <Loading bgColor={"black"}/>

        )}
      </div>
    </>
  );
};

export default Movies;
