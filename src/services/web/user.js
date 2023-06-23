import api from "./api";

//  @desc   Register
//  @route  POST /users/register
export const registerApi = (data) => {
  return api.post("/users/register", data);
};

//  @desc   Login
//  @route  POST /users/login
export const loginApi = (data) => {
  return api.post("/users/login", data);
};

export const updateProfilePicApi = (token, data = null) => {
  console.log(data);
  return api.post("/users/edit-profilepic"
  , data
  , {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const changeNameApi = (token, data) => {
  return api.put("/users/edit-fullname", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//  @desc   authCheck
//  @route  POST /users/auth
export const authApi = (token, data = {}) => {
  return api.post("/users/auth", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
