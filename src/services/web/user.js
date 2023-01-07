import api from "./api";


//  @desc   Register 
//  @route  POST /users/register
export const createUser = (data) => {
    return api.post("/users/register",data);
  };




//  @desc   Login 
//  @route  POST /users/login
export const login = (data) => {
    return api.post("/users/login",data);
  };
