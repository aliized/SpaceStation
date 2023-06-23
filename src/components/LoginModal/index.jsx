import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import { BlogContext } from "context/BlogContext";
import { AnimatePresence, motion } from "framer-motion";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RegisterOrLogin = () => {
  const { modalForm, setOpenModal, openModal } = useContext(BlogContext);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          className="fixed inset-0 overflow-y-auto bg-black backdrop-blur-sm bg-opacity-60 flex justify-center sm:items-center "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: 0.1,
            },
          }}
          exit={{
            opacity: 0,

            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
          key="modalBackground"
        >
          <motion.div
            className="flex flex-col justify-center w-full  sm:h-auto min-h-[32rem] bg-white text-black sm:rounded-2xl sm:mx-auto sm:min-w-[26rem] relative sm:w-auto max-w-72 h-full"
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.1,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
            key="modal"
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterOrLogin;
