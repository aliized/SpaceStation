import { BlogContext } from "context/BlogContext";
import { useContext, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginModal = () => {
  const { openLogin, setOpenLogin } = useContext(BlogContext);
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <div
      className={`${
        openLogin ? "flex" : "hidden"
      } fixed  left-0 right-0 top-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-60 justify-center items-center`}
    >
      <div className="px-10 relative w-full mx-3  sm:mx-auto sm:w-auto sm:min-w-[26rem] min-h-[32rem] bg-white text-black rounded-2xl">
        <div className="absolute top-3 right-4 flex justify-start text-3xl">
          <button
            onClick={() => setOpenLogin(false)}
            className="text-gray-700 hover:text-red-700"
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
        {registerForm ? <RegisterForm setRegisterForm={setRegisterForm}/> : <LoginForm setRegisterForm={setRegisterForm} />}
      </div>
    </div>
  );
};

export default LoginModal;
