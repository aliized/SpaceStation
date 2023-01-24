import api from "./api";

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
};

//  @desc   Get All Books
//  @route  GET /books
export const getBooks = () => {
  return api.get("/books");
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
  return api.get(`/post/${postId}`);
};

//  @desc   Add Post Comment
//  @route  POST /post/add-comment
export const createComment = (token, comment) => {
  return api.post("/post/add-comment", comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//  @desc   Edit Post Comment
//  @route  PUT /post/edit-comment/:commentId
export const editCommentApi = (token, comment) => {
  console.log(`/post/edit-comment/${comment.id}`);
  return api.put(`/post/edit-comment/${comment.id}`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//  @desc   Delete Post Comment
//  @route  DELETE /post/delete-comment/:commentId
export const deleteCommentApi = (token, commentId) => {
  return api.delete(`/post/delete-comment/${commentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//  @desc   get post comments
//  @route  POST /post/comments/:postid
export const getComments = (postId) => {
  return api.get(`/post/comments/${postId}`);
};
