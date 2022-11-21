import { BlogContext } from "context/BlogContext";
import { useContext } from "react";
import MovieBox from "./MovieBox";

const Blog = () => {
  const { posts } = useContext(BlogContext);

  return (
    <>
      <div className=" mx-auto bg-bgSpaceHotel  bg-no-repeat bg-cover h-[55vw]"></div>
      <div className="bg-white py-16 flex flex-col gap-10">
        {posts === [] && (
          <div className="bg-[#ffcccb] text-black mx-auto py-10 px-16 rounded-2xl flex flex-col gap-4 items-center text-xl">
            {" "}
            <p>ارتباط با سرور درست برقرار نمیشه 😢 </p>{" "}
            <p>لطفا یک بار صفحه رو رفرش کن</p>
          </div>
        )}
        {posts !== [] &&
          posts.map((movie) => (
            <MovieBox
              key={movie._id}
              movieName={movie.name}
              directors={movie.directors}
              writers={movie.writers}
              photo={movie.thumbnail}
              content={movie.body}
              movieId={movie._id}
            />
          ))}
      </div>
    </>
  );
};

export default Blog;
