import AdminRoutes from "components/AdminRoutes/index.";
import NotCreated from "components/notCreated";
import AdminPanel from "views/admin/AdminPanel";
import UserPanel from "views/userPanel";
import Account from "views/userPanel/tabs/Account";
import Dashboard from "views/userPanel/tabs/Dashboard";
import Security from "views/userPanel/tabs/Security";
import Settings from "views/userPanel/tabs/Settings";
import NotFound from "views/web/404";
import AboutUs from "views/web/About";
import Blog from "views/web/Blog";
import Books from "views/web/Books";
import GalleryPage from "views/web/Gallery";
import Home from "views/web/Home";
import Movies from "views/web/Movies";
import SinglePost from "views/web/Post";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/movies", element: <Movies /> },
  { path: "/books", element: <Books /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/post/:postId/:title", element: <SinglePost /> },
  { path: "/post/:postId", element: <SinglePost /> },
  { path: "/contact", element: <NotCreated /> },
  { path: "/about", element: <AboutUs /> },

  {
    path: "/admin/*",
    element: (
      <AdminRoutes>
        <AdminPanel />
      </AdminRoutes>
    ),
    // children: [
    //   { path: "", element: <PAdminIndex /> },
    //   { path: "users", element: <Users /> },
    // ],
  },

  {
    path: "/user",
    redirect: "/dashboard",
    element: <UserPanel />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "security", element: <Security /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  { path: "/not-found", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
