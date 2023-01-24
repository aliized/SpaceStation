import axios from "axios";
import { SERVER_URL } from "config";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  //baseURL:'https://api.safinefazayi.ir/'
});

api.interceptors.response.use(null, (error) => {
  
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
      toast.error(" خطایی از سمت سرور پیش اومده :(", {
      id:"serverToast",
      duration: 4000,
    });
  }

  return Promise.reject(error);
});

export default api;
