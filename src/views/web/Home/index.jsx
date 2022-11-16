import Navbar from "components/Header/Navbar/Navbar";
import Header from "components/Header/Header";
import BlogBox from "components/BlogBox";
import BookBox from "components/BookBox";
import MoonBox from "components/MoonBox";
import MovieBox from "components/MovieBox";
import GalleryBox from "components/GalleryBox";
import DictionaryBox from "components/DictionaryBox";
import Footer from "components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
     
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
      <Footer />
    </>
  );
};

export default HomePage;
