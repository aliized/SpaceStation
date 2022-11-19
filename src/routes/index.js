
import NotCreated from "components/notCreated";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "views/web/404";
import Home from "views/web/Home";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        {/* Web */}
        <Route path="" element={<Home />} />
        <Route path="blog" element={<NotCreated />} />
        <Route path="post/:postId" element={<NotCreated />} />
        <Route path="movies" element={<NotCreated />} />
        <Route path="books" element={<NotCreated />} />
        <Route path="gallery" element={<NotCreated />} />
        
        {/* Users */}
        <Route path="register" element={<NotCreated />} />
        <Route path="login" element={<NotCreated />} />
        <Route path="dashboard" element={<NotCreated />} />

        {/* Statics */}
        <Route path="contact-us" element={<NotCreated />} />
        <Route path="about-us" element={<NotCreated />} />

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
