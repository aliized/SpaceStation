
import React from "react";
import { Route, Routes } from "react-router-dom";

import NotCreated from "components/notCreated";

import NotFound from "views/web/404";
import Home from "views/web/Home";
import Movies from "views/web/Movies";
import Blog from "views/web/Blog";
import Books from "views/web/Books";
import SinglePost from "views/web/Post";
import Gallery from "views/web/Gallery";
import AboutUs from "views/web/About";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        {/* Web */}
        <Route path="" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="post/:postId/:title" element={<SinglePost />}/>
        <Route path="post/:postId" element={<SinglePost />}/>

       
        <Route path="movies" element={<Movies />} />
        <Route path="books" element={<Books />} />
        <Route path="gallery" element={<Gallery />} />
        
        {/* Users */}
        <Route path="register" element={<NotCreated />} />
        <Route path="login" element={<NotCreated />} />
        <Route path="dashboard" element={<NotCreated />} />

        {/* Statics */}
        <Route path="contact" element={<NotCreated />} />
        <Route path="about" element={<AboutUs />} />

        {/* Admins */}
        <Route path="admin" element={<NotCreated />} />
        <Route path="admin/login" element={<NotCreated />} />
        <Route path="admin/add-post" element={<NotCreated />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteHandler;
