import axios from "axios";
import api from "./api";

//?const responseGraficoRetirada = await api.get('/get/graficoRetiradaMensal');
//?        const response = await api.get('/posts/show');

import { SERVER_URL } from "config";

//  @desc   Weblog Home Page
//  @route  GET /
//! Home Page

//  @desc   Get All Posts
//  @route  GET /blog
export const getAllPosts = () => {
  return api.get("/blog");
  // const url = `${SERVER_URL}/blog`;
  // return axios.get(url);
};

//  @desc   Get All Movies
//  @route  GET /movies
export const getMovies = () => {
  return api.get("/movies");
  // const url = `${SERVER_URL}/movies`;
  // return axios.get(url);
};

//  @desc   Get All Books
//  @route  GET /books
export const getBooks = () => {
  return api.get("/books");

  // const url = `${SERVER_URL}/books`;
  // return axios.get(url);
};

//  @desc   Get All Photoes
//  @route  GET /gallery
export const getGallery = () => {
  return api.get("/gallery");

  // const url = `${SERVER_URL}/gallery`;
  // return axios.get(url);
};

//  @desc   Get Single post With postId
//  @route  GET /post/:id
export const getPost = (postId) => {
  const url = `${SERVER_URL}/post/${postId}`;
  return axios.get(url);
};

//  @desc   Add Post Comment
//  @route  POST /post/add-comment
export const createComment = (comment) => {
  return api.post("/post/add-comment",comment);

  // const url = `${SERVER_URL}/post/add-comment`;
  // return axios.post(url, comment);
};

//  @desc   Edit Post Comment
//  @route  PUT /post/edit-comment/:commentId
export const editComment = (commentId, comment) => {
  return api.put(`/post/edit-comment/${commentId}`, comment);
};

//  @desc   Delete Post Comment
//  @route  DELETE /post/delete-comment/:commentId
export const deleteComment = (commentId) => {
  return api.delete(`/post/delete-comment/${commentId}`);
};

//  @desc   get post comments
//  @route  POST /post/comments/:postid
export const getComments = (postId) => {
  return api.get(`/post/comments/${postId}`);
};
