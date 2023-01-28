import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { BlogContext } from "context/BlogContext";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import RegisterLogin from "components/LoginModal";
import {
  getAllPosts,
  getBooks,
  getGallery,
  getMovies,
} from "services/web/blog";
import ScrollToTop from "components/Scrollers/ScrollToTop";
import { authApi, loginApi, registerApi } from "services/web/user";

import { useRoutes } from "react-router-dom";
import routes from "routes";
import { SERVER_URL } from "config";

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

  //* User States
  const [openModal, setOpenModal] = useState(false);
  const [modalForm, setModalForm] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const router = useRoutes(routes);

  const loginDataSet = (userInfo, userToken) => {
    //* user info
    setUser(userInfo);
    
    setLoggedIn(true);

    //* user token
    localStorage.setItem("user", userToken);
    setToken(userToken);

    //  localStorage.setItem("user", JSON.stringify({ userToken }));
  };

  const logoutDataSet = () => {
    setToken(null);
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
  };

  const handleRegister = async (user) => {
    let loadingToast = toast.loading("لطفا چند لحظه صبر کن");
    try {
      //*sakhte objecte user
      user.fullName = user.email.substring(0, user.email.indexOf("@"));

      //*ertebat ba backend vase sakht
      const res = await registerApi(user);

      if (res.status !== 201) {
        toast.error("مشکلی در ساخت کاربر به وجود آمده!", {
          id: loadingToast,
          duration: 4000,
        });
      }
      toast.success(`سلام ${user.fullName} عزیز، خوش آمدی!`, {
        id: loadingToast,
        duration: 4000,
      });

      //*set token + states
      const { user: userInfo, token: userToken } = res.data;
      loginDataSet(userInfo, userToken);

      setOpenModal(false);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: loadingToast,
          duration: 4000,
        });
      } else {
        toast.dismiss(loadingToast);
      }
    }
  };

  const handleLogin = async (user) => {
    let loadingToast = toast.loading("لطفا چند لحظه صبر کن");
    try {
      const res = await loginApi(user);
      if (res.status !== 200) {
        toast.error("مشکلی در ورود به حساب کاربری به وجود آمده!", {
          id: loadingToast,
          duration: 4000,
        });
      }

      toast.success("با موفقیت وارد حساب کاربریت شدی", {
        id: loadingToast,
        duration: 4000,
      });

      //*set token + states
      const { user: userInfo, token: userToken } = res.data;
      loginDataSet(userInfo, userToken);

      setOpenModal(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          toast.error("قبلا ثبت نام نکردی؟ لطفا ثبت نام کن", {
            id: loadingToast,
            duration: 4000,
          });
          setModalForm("register");
        } else {
          toast.error(err.response.data.message, {
            id: loadingToast,
            duration: 4000,
          });
        }
      } else {
        toast.dismiss(loadingToast);
      }
    }
  };

  useEffect(() => {
    //? auth check
    (async () => {
      try {
        const userToken = localStorage.getItem("user");
        
        if (!userToken) {
          return logoutDataSet();
        }
        const res = await authApi(userToken);
        if (res.status !== 200) {
          return logoutDataSet();
        }

        const userInfo = res.data;
        loginDataSet(userInfo, userToken);
      } catch (err) {
        if(err.response.status===401){
          logoutDataSet();
        }
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        //* Fetch Data
        const { data: blogData } = await getAllPosts();
        const { data: moviesData } = await getMovies();
        const { data: booksData } = await getBooks();
        const { data: galleryData } = await getGallery();
        const galleryArray = galleryData.gallery;
        galleryArray.forEach((frame) => {
          frame.src = `${SERVER_URL}/img/gallery/${frame.photo}`;
        });
        //* Set Data
        setBlog(blogData.posts);
        setMovies(moviesData.movies);
        setBooks(booksData.books);
        setGallery(galleryArray);

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
    })();
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

        openModal,
        setOpenModal,
        modalForm,
        setModalForm,

        handleRegister,
        handleLogin,
        logout: logoutDataSet,

        loggedIn,
        token,
        user,
      }}
    >
      <div className="relative font-vazir">
        <Toaster
          toastOptions={{
            className: "font-vazir bg-white",
          }}
        />
        <ScrollToTop />

        <div className="bg-black text-white  min-h-[100vh] flex flex-col justify-between">
          <Navbar />
          {router}
          <Footer />
        </div>
        {openModal ? <RegisterLogin /> : null}
      </div>
    </BlogContext.Provider>
  );
}

export default App;
