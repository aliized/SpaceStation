import { useContext, useEffect, useState } from "react";

import { BlogContext } from "context/BlogContext";
import { createUser } from "services/web/user";

import FormInput from "../FormInput";

const RegisterForm = ({ setRegisterForm }) => {
  const { setOpenLogin, openLogin } = useContext(BlogContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //*reset after close
  useEffect(() => {
    if (!openLogin) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [openLogin]);

  //* submit handler
  const handleSubmit = async (e, username = email) => {
    try {
      e.preventDefault();

      const user = { email, password, confirmPassword, username };

      const { data, status } = await createUser(user);
      if (status === 201) {
        console.log(data);
        // login
        setOpenLogin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="font-bold text-2xl">
        <p className="py-12 text-center">ساخت حساب کاربری</p>
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
        />
        <FormInput
          label="کلمه عبور"
          state={password}
          setState={setPassword}
          type="password"
        />
        <FormInput
          label="تکرار کلمه عبور"
          state={confirmPassword}
          setState={setConfirmPassword}
          type="password"
        />

        <input
          className="px-5 py-2 text-white bg-blue-700 rounded-full duration-75 cursor-pointer hover:bg-blue-800"
          type="submit"
          value="ثبت نام"
        />
      </form>
      <p className="text-sm text-center pb-10">
        میخوای وارد شی؟{" "}
        <button
          onClick={() => setRegisterForm(false)}
          className=" text-blue-500"
        >
          ورود{" "}
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
