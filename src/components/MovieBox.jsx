import MainBox from "./containers/MainBox";
import MovieCard from "./MovieCard";


import movie1 from "../pics/dynamic/movie1.png"
import movie2 from "../pics/dynamic/movie2.jpg"
import movie3 from "../pics/dynamic/movie3.jpg"

const MovieBox = () => {
   

const movies = [
    {
      id: 1,
      name: "spaceman",
      director:" ریدلی اسکات",
      writers:" جان اسپایتس، دیمون لیندلوف",
      actors:"نومی راپاس، لوگان مارشال گرین",
      releaseDate:"2012",
      photo: movie1,
    },
    {
      id: 2,
      name: "Prometheus",
      director:" ریدلی اسکات",
      writers:" جان اسپایتس، دیمون لیندلوف",
      actors:"نومی راپاس، لوگان مارشال گر نومی راپاس، لوگان مارشال گرین",
      releaseDate:"2012",
      photo: movie2,
    },
    {
      id: 3,
      name: "ISS",
      director:" ریدلی اسکات",
      writers:" جان اسپایتس، دیمون لیندلوف",
      actors:"نومی راپاس، لوگان مارشال گرین",
      releaseDate:"2012",
      photo: movie3,
    },
   
  ];

  
    return ( <MainBox  bgColor={"bg-white"}>
    <div className="text-3xl font-bold flex justify-center mb-14">
      <p>فیلم های نجومی</p>
    </div>
    <div className='flex flex-col items-center gap-12 '>
      

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
  </MainBox> );
}
 
export default MovieBox;