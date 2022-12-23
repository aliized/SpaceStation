import { useEffect, useState } from "react";

import { BlogContext } from "context/BlogContext";

import "./app.css";

import RouteHandler from "routes";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import RegisterLogin from "components/LoginModal";
import {
  getAllPosts,
  getBooks,
  getGallery,
  getMovies,
} from "services/web/blog";

function App() {
  //* Server Data States
  const [blog, setBlog] = useState([]);
  const [blogIndex, setBlogIndex] = useState([]);
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [gallery, setGallery] = useState([]);

  //*NavBar States
  const [openNav, setOpenNav] = useState(false);
  

  //* Extra States
  const [loading, setLoading] = useState(false);
const [openLogin, setOpenLogin] = useState(false);





  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        //* Fetch Data
        const { data: blogData } = await getAllPosts();
        const { data: moviesData } = await getMovies();
        const { data: booksData } = await getBooks();
        const { data: galleryData } = await getGallery();

        //* Set Data
        setBlog(blogData.posts);
        setMovies(moviesData.movies);
        setBooks(booksData.books);
        setGallery(galleryData.gallery);

        const blogList = [...blogData.posts];
        blogList.forEach((post) => {
          post.body = post.body.split(" ").slice(0, 160).join(" ");
        });
        setBlogIndex(blogList);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
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
        blogIndex,

        loading,
        setLoading,


        openNav,
        setOpenNav,

        openLogin,
        setOpenLogin,
      
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
    <div className="relative font-IranSans">

      <div className="bg-black text-white  min-h-[100vh] flex flex-col justify-between">
        
          <Navbar />
          <RouteHandler />
        
        <Footer />
      </div>
      <RegisterLogin/>
    </div>
    </BlogContext.Provider>
  );
}

export default App;
