import MainFrame from "components/containers/MainFrame";
import MovieCard from "./MovieCard";

import movie1 from "assets/images/dynamic/movie1.webp";
import movie2 from "assets/images/dynamic/movie2.webp";
import movie3 from "assets/images/dynamic/movie3.webp";

const MovieBox = () => {
  const movies = [
    {
      id: 1,
      name: "spaceman",
      director: " ریدلی اسکات",
      writers: " جان اسپایتس، دیمون لیندلوف",
      actors: "نومی راپاس، لوگان مارشال گرین",
      releaseDate: "2012",
      photo: movie1,
    },
    {
      id: 2,
      name: "Prometheus",
      director: " ریدلی اسکات",
      writers: " جان اسپایتس، دیمون لیندلوف",
      actors: "نومی راپاس، لوگان مارشال گر نومی راپاس، لوگان مارشال گرین",
      releaseDate: "2012",
      photo: movie2,
    },
    {
      id: 3,
      name: "ISS",
      director: " ریدلی اسکات",
      writers: " جان اسپایتس، دیمون لیندلوف",
      actors: "نومی راپاس، لوگان مارشال گرین",
      releaseDate: "2012",
      photo: movie3,
    },
  ];

  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="text-3xl font-bold flex justify-center mb-14">
        <p>فیلم های نجومی</p>
      </div>
      <div className="flex flex-col items-center gap-12 ">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name}
            director={movie.director}
            writers={movie.writers}
            actors={movie.actors}
            releaseDate={movie.releaseDate}
            photo={movie.photo}
          />
        ))}
      </div>
    </MainFrame>
  );
};

export default MovieBox;
