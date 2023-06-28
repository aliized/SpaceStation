import { useContext } from "react";

import { BlogContext } from "context/BlogContext";
import { Form, Formik } from "formik";
import { registerSchema } from "validators/userSchema";

import FormInput from "../FormInput";

const RegisterForm = () => {
  const { handleRegister, setModalForm } = useContext(BlogContext);

  return (
    <>
      <div className="font-bold  font-anjoman text-2xl sm:text-3xl">
        <p className="py-10 text-center">ساخت حساب کاربری</p>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col gap-3 p-8 sm:mx-auto">
            <FormInput
              label="آدرس ایمیل"
              type="email"
              placeHolder="example@gmail.com"
              name="email"
              error={errors.email}
              touched={touched.email}
            />

            <FormInput
              label="کلمه عبور"
              type="password"
              placeHolder="********"
              name="password"
              error={errors.password}
              touched={touched.password}
            />

            <FormInput
              label="تکرار کلمه عبور"
              type="password"
              placeHolder="********"
              name="confirmPassword"
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />

            <input
              disabled={isSubmitting}
              className="px-5 py-2 mt-2 text-white bg-blue-700 rounded-full duration-75 cursor-pointer hover:bg-blue-800"
              type="submit"
              value="ثبت نام"
            />
          </Form>
        )}
      </Formik>

      <p className="text-sm text-center pb-10">
        میخوای وارد شی؟{" "}
        <button
          type="button"
          onClick={() => setModalForm("login")}
          className=" text-blue-500"
        >
          ورود{" "}
        </button>
      </p>
    </>
  );
};

export default RegisterForm;
