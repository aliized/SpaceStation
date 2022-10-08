import Navbar from "../components/Header/Navbar/Navbar";
import Header from "../components/Header/Header";
import BlogBox from "../components/BlogBox";
import BookBox from "../components/BookBox";
import MoonBox from "../components/MoonBox";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogBox />
      <div className="container mx-auto bg-issBg  bg-no-repeat bg-cover mt-40 h-[40rem]"></div>
      <div className="bg-white">
        <BookBox/>
        <MoonBox/>
      </div>
    </>
  );
};

export default HomePage;
