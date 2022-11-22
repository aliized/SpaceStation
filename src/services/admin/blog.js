import axios from "axios";
import { SERVER_URL } from "components/config";

//* =======Blog=======
//  @desc   Admin Create Post
//  @route  POST /admin/add-post
export const createPost = (post) => {
  const url = `${SERVER_URL}/admin/add-post`;
  return axios.post(url, post);
};

//  @desc   Admin Edit Post
//  @route  PUT /admin/edit-post/:id
export const editPost = (postId, post) => {
  const url = `${SERVER_URL}/admin/edit-post/${postId}`;
  return axios.put(url, post);
};

//  @desc   Admin Delete Post
//  @route  DELETE /admin/delete-post/:id
export const deletePost = (postId) => {
  const url = `${SERVER_URL}/admin/delete-post/${postId}`;
  return axios.delete(url);
};

//* =======Movies=======
//  @desc   Admin Create Movie
//  @route  POST /admin/add-movie
export const createMovie = (movie) => {
  const url = `${SERVER_URL}/admin/add-movie`;
  return axios.post(url, movie);
};

//  @desc   Admin Edit Movie
//  @route  PUT /admin/edit-movie/:id
export const editMovie = (movieId, movie) => {
  const url = `${SERVER_URL}/admin/edit-movie/${movieId}`;
  return axios.put(url, movie);
};

//  @desc   Admin Delete Movie
//  @route  DELETE /admin/delete-movie/:id
export const deleteMovie = (movieId) => {
  const url = `${SERVER_URL}/admin/delete-movie/${movieId}`;
  return axios.delete(url);
};

//* =======Books=======
//  @desc   Admin Create Book
//  @route  POST /admin/add-book
export const createBook = (book) => {
  const url = `${SERVER_URL}/admin/add-book`;
  return axios.post(url, book);
};

//  @desc   Admin Edit Book
//  @route  PUT /admin/edit-book/:id
export const editBook = (bookId, book) => {
  const url = `${SERVER_URL}/admin/edit-book/${bookId}`;
  return axios.put(url, book);
};

//  @desc   Admin Delete Book
//  @route  DELETE /admin/delete-book/:id
export const deleteBook = (bookId) => {
  const url = `${SERVER_URL}/admin/delete-book/${bookId}`;
  return axios.delete(url);
};

//* =======Gallery=======
//  @desc   Admin Create Photo
//  @route  POST /admin/add-photo
export const createPhoto = (photo) => {
  const url = `${SERVER_URL}/admin/add-photo`;
  return axios.post(url, photo);
};

//  @desc   Admin Edit Photo
//  @route  PUT /admin/edit-photo/:id
export const editPhoto = (photoId, photo) => {
  const url = `${SERVER_URL}/admin/edit-photo/${photoId}`;
  return axios.put(url, photo);
};

//  @desc   Admin Delete Photo
//  @route  DELETE /admin/delete-photo/:id
export const deletePhoto = (photoId) => {
  const url = `${SERVER_URL}/admin/delete-photo/${photoId}`;
  return axios.delete(url);
};
