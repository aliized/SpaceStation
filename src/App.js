import { useEffect, useState } from "react";

import { BlogContext } from "context/BlogContext";

import RouteHandler from "routes";
import Navbar from "components/Header/Navbar";
import Footer from "components/Footer";
import {
  getAllPosts,
  getBooks,
  getGallery,
  getMovies,
} from "services/web/blog";

function App() {
  //* Server Data States
  const [movies, setMovies] = useState([]);
  const [blog, setBlog] = useState([]);
  const [books, setBooks] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // setLoading(true);

        //* Fetch Data
        const { data: blogData } = await getAllPosts();
        const { data: moviesData } = await getMovies();
        const { data: booksData } = await getBooks();
        const { data: galleryData } = await getGallery();
       
        //* Set Data
        setBlog(blogData);
        setMovies(moviesData.movies);
        setBooks(booksData);
        setGallery(galleryData);

        // setLoading(false);
      } catch (err) {
        console.log(err.message);
        // setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <BlogContext.Provider
      value={{
        blog,
        movies,
        books,
        gallery,

        // loading,
        // setLoading,
        // setContacts,
        // setFilteredContacts,
        // contacts,
        // filteredContacts,
        // groups,
        // deleteContact: confirmDelete,
        // createContact: createContactForm,
        // contactSearch,
      }}
    >
      <div className="bg-black text-white font-IranSans min-h-[100vh] flex flex-col justify-between">
        <div>
          <Navbar />
          <RouteHandler />
        </div>
        <Footer />
      </div>
    </BlogContext.Provider>
  );
}

export default App;
