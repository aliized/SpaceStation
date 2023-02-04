import { useContext } from "react";
import { IoClose } from "react-icons/io5";

import { BlogContext } from "context/BlogContext";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginModal = () => {
  const { modalForm, setOpenModal, openModal } = useContext(BlogContext);

  if (openModal)
    return (
      <div className="fixed inset-0 overflow-y-auto bg-black backdrop-blur-sm bg-opacity-60 flex justify-center sm:items-center ">
        <div className="flex flex-col justify-center w-full  sm:h-auto min-h-[32rem] bg-white text-black sm:rounded-2xl sm:mx-auto sm:min-w-[26rem] relative sm:w-auto max-w-72 h-full">
          <div className="absolute top-4 right-4 flex justify-start  text-4xl sm:text-3xl">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className=" text-gray-700 hover:text-red-700"
            >
              <IoClose />
            </button>
          </div>
          {modalForm === "register" ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    );
};

export default LoginModal;
