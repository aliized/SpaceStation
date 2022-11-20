import Header from "components/Header/Header";
import BlogBox from "views/web/Home/BlogBox";
import BookBox from "views/web/Home/BookBox";
import MoonBox from "views/web/Home/MoonBox";
import MovieBox from "views/web/Home/MovieBox";
import GalleryBox from "views/web/Home/GalleryBox";
import DictionaryBox from "views/web/Home/DictionaryBox";

const Home = () => {
  return (
    <>

      <Header />
      <BlogBox />
      <div className=" mx-auto bg-issBg  bg-no-repeat bg-cover mt-10 lg:mt-32 h-[52vw]"></div>
      <div className="bg-white py-20">
        <BookBox />
        <MoonBox />
      </div>
      <div className="max-w-6xl my-10 lg:my-20 lg:mx-auto container bg-bgPlanets bg-no-repeat bg-contain h-[75vw] lg:h-[60rem]"></div>
      <MovieBox />
      <div className=" my-5 lg:my-20  bg-bgGalaxy bg-no-repeat bg-cover h-[45vw]"></div>
      <GalleryBox />
      <DictionaryBox />
      
    </>
  );
};

export default Home;
