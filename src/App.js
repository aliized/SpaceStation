import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import Footer from "components/Footer";
import RegisterOrLogin from "components/LoginModal";
import Navbar from "components/Navbar";
import ScrollToTop from "components/Scrollers/ScrollToTop";
import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import routes from "routes";
import {
  getAllPosts,
  getBooks,
  getGallery,
  getMovies,
} from "services/web/blog";
import { authApi, loginApi, registerApi } from "services/web/user";

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
  const navigate = useNavigate();
  const {pathname} = useLocation();

  // Set the user token to the user object, so that it can be used later.
  const loginDataSet = (userInfo, userToken) => {
    //* user info
    setUser(userInfo);
    

    setLoggedIn(true);

    //* user token
    localStorage.setItem("user", userToken);
    setToken(userToken);

    //  localStorage.setItem("user", JSON.stringify({ userToken }));
  };

  // Logout and clear the token and user data set
  const logoutDataSet = () => {
    setToken(null);
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
    if(pathname.includes("/user")){
      navigate("/");
    }
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

  // Handles user login using the provided user object
  const handleLogin = async (user) => {
    // Show loading toast while waiting for API response
    let loadingToast = toast.loading("لطفا چند لحظه صبر کن");

    try {
      // Call the login API with the provided user object
      const res = await loginApi(user);

      // Check the response status and show error toast if not successful
      if (res.status !== 200) {
        toast.error("مشکلی در ورود به حساب کاربری به وجود آمده!", {
          id: loadingToast,
          duration: 4000,
        });
      }

      // Show success toast if login is successful
      toast.success("با موفقیت وارد حساب کاربریت شدی", {
        id: loadingToast,
        duration: 4000,
      });

      // Set token and user information to state
      const { user: userInfo, token: userToken } = res.data;
      loginDataSet(userInfo, userToken);

      // Close the login modal
      setOpenModal(false);
    } catch (err) {
      // Handle errors
      if (err.response) {
        // Handle 404 error by showing register form and error toast
        if (err.response.status === 404) {
          toast.error("قبلا ثبت نام نکردی؟ لطفا ثبت نام کن", {
            id: loadingToast,
            duration: 4000,
          });
          setModalForm("register");
        } else {
          // Show error toast with the error message
          toast.error(err.response.data.message, {
            id: loadingToast,
            duration: 4000,
          });
        }
      } else {
        // Dismiss the loading toast if there is no response
        toast.dismiss(loadingToast);
      }
    }
  };

  // // Login to the server and get the user info and token.
  // const handleLogin = async (user) => {
  //   let loadingToast = toast.loading("لطفا چند لحظه صبر کن");
  //   try {
  //     const res = await loginApi(user);
  //     if (res.status !== 200) {
  //       toast.error("مشکلی در ورود به حساب کاربری به وجود آمده!", {
  //         id: loadingToast,
  //         duration: 4000,
  //       });
  //     }

  //     toast.success("با موفقیت وارد حساب کاربریت شدی", {
  //       id: loadingToast,
  //       duration: 4000,
  //     });

  //     //*set token + states
  //     const { user: userInfo, token: userToken } = res.data;
  //     loginDataSet(userInfo, userToken);

  //     setOpenModal(false);
  //   } catch (err) {
  //     if (err.response) {
  //       if (err.response.status === 404) {
  //         toast.error("قبلا ثبت نام نکردی؟ لطفا ثبت نام کن", {
  //           id: loadingToast,
  //           duration: 4000,
  //         });
  //         setModalForm("register");
  //       } else {
  //         toast.error(err.response.data.message, {
  //           id: loadingToast,
  //           duration: 4000,
  //         });
  //       }
  //     } else {
  //       toast.dismiss(loadingToast);
  //     }
  //   }
  // };

  // Check if user is logged in already
  useEffect(() => {
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
        if (err.response.status === 401) {
          logoutDataSet();
        }
        console.log(err);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setUser,
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
        <RegisterOrLogin />
      </div>
    </BlogContext.Provider>
  );
}

export default App;
