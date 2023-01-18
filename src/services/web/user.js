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

//  @desc   authCheck
//  @route  POST /users/auth
export const authApi = (token, data = {}) => {
  return api.post("/users/auth", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
