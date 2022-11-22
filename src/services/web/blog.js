import axios from "axios";

const SERVER_URL = "http://192.168.177.208:9000";

//  @desc   Weblog Home Page
//  @route  GET /
//! Home Page

//  @desc   Get All Posts
//  @route  GET /blog
export const getAllPosts = () => {
  const url = `${SERVER_URL}/blog`;
  return axios.get(url);
};

//  @desc   Get All Movies
//  @route  GET /movies
export const getMovies = () => {
  const url = `${SERVER_URL}/movies`;
  return axios.get(url);
};

//  @desc   Get All Books
//  @route  GET /books
export const getBooks = () => {
  const url = `${SERVER_URL}/books`;
  return axios.get(url);
};

//  @desc   Get All Photoes
//  @route  GET /gallery
export const getGallery = () => {
  const url = `${SERVER_URL}/gallery`;
  return axios.get(url);
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
  const url = `${SERVER_URL}/post/add-comment`;
  return axios.post(url, comment);
};

//  @desc   Edit Post Comment
//  @route  PUT /post/edit-comment/:commentId
export const editComment = (commentId, comment) => {
  const url = `${SERVER_URL}/post/edit-comment/${commentId}`;
  return axios.put(url, comment);
};
//  @desc   Delete Post Comment
//  @route  DELETE /post/delete-comment/:commentId
export const deleteComment = (commentId) => {
  const url = `${SERVER_URL}/post/delete-post/${commentId}`;
  return axios.delete(url);
};

//  @desc   get post comments
//  @route  POST /post/comments/:postid
export const getComments = (postId) => {
  const url = `${SERVER_URL}/post/comments/${postId}`;
  return axios.get(url);
};
