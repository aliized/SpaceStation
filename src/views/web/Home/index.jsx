import BlogBox from "./BlogBox";
import BookBox from "./BookBox";
import DictionaryBox from "./DictionaryBox";
import GalleryBox from "./GalleryBox";
import Header from "./Header";
import MoonBox from "./MoonBox";
import MovieBox from "./MovieBox";

const Home = () => {
  return (
    <>
      <Header />
      <BlogBox />
      <div className="w-full mx-auto bg-issBg  bg-no-repeat bg-cover mt-10 lg:mt-32 h-[52vw]"></div>
      <div className="bg-white py-20">
        <BookBox />
        <MoonBox />
      </div>
      <div className="w-full max-w-6xl my-10 lg:my-20 lg:mx-auto container bg-bgPlanets bg-no-repeat bg-contain h-[75vw] lg:h-[60rem]"></div>
      <MovieBox />
      <div className="w-full my-5 lg:my-20  bg-bgGalaxy bg-no-repeat bg-cover h-[45vw]"></div>
      <GalleryBox />
      <DictionaryBox />
    </>
  );
};

export default Home;
