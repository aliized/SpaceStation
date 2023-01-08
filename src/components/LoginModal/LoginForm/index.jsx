import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { BlogContext } from "context/BlogContext";
import { login } from "services/web/user";

import FormInput from "../FormInput";

const LoginForm = ({ setRegisterForm }) => {
  const { setOpenLogin, openLogin } = useContext(BlogContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!openLogin) {
      setEmail("");
      setPassword("");
    }
  }, [openLogin]);

  //* submit handler
  const handleSubmit = async (e) => {
    let loadingToast = toast.loading("لطفا چند لحظه صبر کن");
    e.preventDefault();
    try {
      let res;

      const user = { email, password };

      if (email && password) {
        res = await login(user);
      } else {
        res = "";

        toast.error("لطفا موارد خواسته شده را تکمیل کنید", {
          id: loadingToast,
          duration: 4000,
        });
        return;
      }

      if (res.status === 200) {


        toast.success("با موفقیت وارد حساب کاربریت شدی", {
          id: loadingToast,
          duration: 4000,
        });
        // login
localStorage.setItem("token",res.data.token)        
console.log(res.data);

        setOpenLogin(false);





      }
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status < 500
      ) {
        toast.error("یه خطایی پیش اومده :(", {
          id: loadingToast,
          duration: 3000,
        });
        //  خطایی که انتطارشو داریم
        // ino mishe bebarim tu api
      } else {
        toast.error(" خطایی از سمت سرور پیش اومده :(", {
          id: loadingToast,
          duration: 3000,
        });
        //   خطایی از سمت سرور
      }

      console.log(err);
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl">
        <p className="py-12 text-center">ورود به حساب کاربری</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10  mx-auto py-8 sm:w-72"
      >
        <FormInput
          label="آدرس ایمیل"
          state={email}
          setState={setEmail}
          type="email"
          placeHolder="example@gmail.com"
          name="email"
        />
        <FormInput
          label="کلمه عبور"
          state={password}
          setState={setPassword}
          type="password"
          placeHolder="********"
          name="password"
        />

        <input
          className="px-5 py-2 text-white bg-blue-700 rounded-full duration-75 cursor-pointer hover:bg-blue-800"
          type="submit"
          value="ورود"
        />
      </form>
      <p className="text-sm text-center pb-10">
        تا حالا ثبت نام نکردی؟{" "}
        <button
          onClick={() => setRegisterForm(true)}
          className=" text-blue-500"
        >
          ثبت نام
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
