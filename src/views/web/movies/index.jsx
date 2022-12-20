import { useContext } from "react";

import { BlogContext } from "context/BlogContext";

import MovieBox from "./MovieBox";
import Loading from "components/Loading";

const Movies = () => {
  const { movies } = useContext(BlogContext);

  return (
    <>
      <div className="w-full mx-auto bg-bgHeader1  bg-no-repeat bg-cover
      bg-center h-[35vh] lg:h-[35vw] relative">
                  
                  {/* <div className="absolute -bottom-1 w-full h-5 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0)]"></div> */}

      </div>
      <div className="flex flex-col gap-10 py-10 bg-white">
        {movies.length ? (
          movies.map((movie) => (
            <MovieBox
              key={movie._id}
              movieName={movie.name}
              directors={movie.directors}
              writers={movie.writers}
              photo={movie.thumbnail}
              actors={movie.actors}
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
