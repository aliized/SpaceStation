import { BlogContext } from "context/BlogContext";
import { useContext, useEffect, useState } from "react";

const LoginForm = ({ setRegisterForm }) => {
  const { openLogin } = useContext(BlogContext);

  const [mail, setMail] = useState("");
  const [mailFocused, setMailFocused] = useState(false);
  const [mailBorder, setMailBorder] = useState("w-0");

  const [password, setPassword] = useState("");
  const [passBorder, setPassBorder] = useState("");
  const [passFocused, setPassFocused] = useState(false);
  const [passShow, setPassShow] = useState(false);

  useEffect(() => {
    if (!openLogin) {
      setMail("");
      setMailFocused(false);
      setMailBorder("w-0");
      setPassword("");

      setPassBorder("w-0");
      setPassFocused(false);
      setPassShow(false);
    }
  }, [openLogin]);

  useEffect(() => {
    if (passFocused || password) {
      setPassBorder("w-full");
    } else {
      setPassBorder("w-0");
    }
  }, [passFocused, password]);

  useEffect(() => {
    if (mailFocused || mail) {
      setMailBorder("w-full");
    } else {
      setMailBorder("w-0");
    }
  }, [mail, mailFocused]);

  const handleSubmit = () => {
    console.log(password, mail);
  };

  return (
    <div>
      <div className="font-bold text-2xl">
        <p className="py-12 text-center">ورود به حساب کاربری</p>
      </div>

      <form
        action="login"
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10  mx-auto py-8 sm:w-72"
      >
        <div>
          <label htmlFor="email">آدرس ایمیل</label>
          <div
            dir="ltr"
            className="pr-1 flex relative items-center border-b-2 border-gray-300 h-10"
          >
            <div className="text-xl pt-1 px-1  justify-center text-gray-500">
              <ion-icon name="person"></ion-icon>
            </div>

            <input
              dir="ltr"
              type="email"
              name="userMail"
              placeholder="example@gmail.com"
              className=" leading-tight focus:outline-none bg-none w-full px-1 "
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
              onFocus={() => {
                setMailFocused(true);
              }}
              onBlur={() => {
                setMailFocused(false);
              }}
            />
            <div
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[2px] absolute -bottom-[2px]  duration-300 ${mailBorder}`}
            ></div>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="opacity-100">
            کلمه عبور
          </label>

          <div
            dir="ltr"
            className=" flex items-center relative h-12 border-b-2 border-gray-300"
          >
            <div className="text-xl pt-1 px-1 text-gray-500 ">
              <ion-icon name="lock-closed"></ion-icon>{" "}
            </div>

            <input
              type={!passShow ? "password" : "text"}
              name="password"
              placeholder="********"
              className="leading-tight focus-visible:outline-none bg-none w-full "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              onFocus={() => {
                setPassFocused(true);
              }}
              onBlur={() => {
                setPassFocused(false);
              }}
            />

            <button
              onClick={() => setPassShow(!passShow)}
              className="hover:text-gray-700 text-xl flex justify-center items-center text-gray-300 px-1"
            >
              {passShow ? (
                <ion-icon name="eye-off"></ion-icon>
              ) : (
                <ion-icon name="eye"></ion-icon>
              )}
            </button>

            <div
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[2px] absolute -bottom-[2px]  duration-300 ${passBorder}`}
            ></div>
          </div>
        </div>

        <input
          className="px-5 py-2 text-white bg-blue-700 rounded-full duration-75 cursor-pointer hover:bg-blue-800"
          type="submit"
          value="ورود"
          onClick={handleSubmit}
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
