import {BlogContext} from "context/BlogContext";

import RouteHandler from "routes";
import Navbar from "components/Header/Navbar/Navbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import { getMovies } from "services/web/blog";


function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: moviesData } = await getMovies();
        console.log(moviesData.movies);
        setMovies(moviesData.movies);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <BlogContext.Provider  value={{
      setMovies,
      movies,

      
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
    }}>
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
