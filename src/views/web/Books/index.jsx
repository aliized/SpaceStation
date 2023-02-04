import { useContext } from "react";

import LoadingPost from "components/Loading/blog/LoadingPost";
import MultiRenderer from "components/MultiRenderer";
import { BlogContext } from "context/BlogContext";

import BookBox from "./BookBox";

const Books = () => {
  const { loading, books } = useContext(BlogContext);
  return (
    <>
      <div
        className="w-full mx-auto bg-bgHeader3  bg-no-repeat bg-cover
      bg-center h-[35vh] lg:h-[35vw] relative"
      >
        {/* <div className="absolute -bottom-1 w-full h-5 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0)]"></div> */}
      </div>
      <div className="flex flex-col gap-10 py-10 bg-white">
        {!loading && books.length ? (
          books.map((book) => (
            <BookBox
              key={book._id}
              bookName={book.name}
              writer={book.writer}
              photo={book.thumbnail}
              content={book.body}
              bookId={book._id}
            />
          ))
        ) : (
          <MultiRenderer times={3}>
            <LoadingPost bgColor={"black"} />
          </MultiRenderer>
        )}
      </div>
    </>
  );
};

export default Books;
