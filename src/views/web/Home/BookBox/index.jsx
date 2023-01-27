import book1 from "assets/images/dynamic/book1.webp";
import LoadingBookBox from "components/Loading/home/LoadingBookBox";
import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const BookBox = () => {
  const { books, loading } = useContext(BlogContext);
  const book = books[0];

  return (
    <div className="container pb-2 lg:pb-20 max-w-7xl px-5 mx-auto flex flex-col justify-center items-center gap-7 text-black ">
      <h4 className="text-3xl font-bold md:text-4xl font-anjoman">
        کتاب های نجومی
      </h4>

      {!loading && books.length ? (
        <>
          <p className="text-2xl font-bold text-center">کتاب {book.name}</p>
          <div className=" flex flex-col-reverse lg:flex-row items-center lg:items-stretch ">
            <div className="flex-1 flex flex-col gap-4 font-medium text-lg py-4 lg:px-8 leading-8 text-gray-700 justify-between ">
              <div>{book.body}</div>

              <div className="flex justify-end">
                <Link
                  to="books"
                  className="bg-blue-700 text-white py-2 px-5 rounded-full"
                >
                  {" "}
                  کتاب های بیشتر
                </Link>
              </div>
            </div>

            <div className="flex-1 rounded-3xl md:rounded-large w-2/3 sm:w-1/2 max-w-sm md:mx-7  overflow-hidden">
              <img
                src={`${SERVER_URL}/img/books/${book.thumbnail}`}
                alt="کتاب"
                className="aspect-[3/4] mx-auto w-full"
              />
            </div>
          </div>
        </>
      ) : (
        <LoadingBookBox />
      )}
    </div>
  );
};

export default BookBox;
