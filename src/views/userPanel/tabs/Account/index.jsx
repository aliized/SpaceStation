import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { BlogContext } from "context/BlogContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { changeNameApi } from "services/web/user";
import { changeNameSchema } from "validators/userSchema";

import ProfilePic from "./ProfilePic";

const Account = () => {
  const { user, token, setUser } = useContext(BlogContext);
  const [editing, setEditing] = useState(false);

  const handleChangeName = async (values) => {
    const loadingChangeName = toast.loading("لطفا چند لحظه صبر کنید!");
    try {
      //* sending Data to Api
      console.log();
      const res = await changeNameApi(token, values);
      console.log(res);

      if (res.status !== 200) {
        toast.error("مشکلی در تغییر نام به وجود آمده!", {
          id: loadingChangeName,
          duration: 4000,
        });
      }

      const updatedUser = res.data.user;

      toast.success(
        ` ${updatedUser.fullName} جان تغییر نام با موفقیت انجام شد`,
        {
          id: loadingChangeName,
          duration: 4000,
        },
      );
      //* set new data
      setUser(updatedUser);
      setEditing(false);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: loadingChangeName,
          duration: 4000,
        });
      } else {
        console.log(err);
        toast.dismiss(loadingChangeName);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ProfilePic />
      <div className="px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
        {editing ? (
          <Formik
            initialValues={{
              fullName: user.fullName,
            }}
            validationSchema={changeNameSchema}
            onSubmit={(values) => {
              if (values.fullName !== user.fullName) {
                handleChangeName(values);
              }
            }}
          >
            {({ errors }) => (
              <Form>
                <div className="flex gap-3 text-sm">
                  <Field
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="نام شما"
                    className="px-2 py-1 bg-transparent border border-gray-400 rounded-md w-52"
                  
                    autoFocus={true}
                  />

                  <button
                    onClick={() => {
                      setEditing(false);
                    }}
                    className="px-2 py-1 text-gray-400 duration-75 border border-gray-400 rounded-md cursor-pointer  hover:bg-white hover:bg-opacity-10 hover:text-gray-200 hover:border-gray-200"
                    type="button"
                  >
                    لغو
                  </button>

                  <input
                    className="px-2 py-1 text-white duration-75 bg-blue-700 rounded-md cursor-pointer  hover:bg-blue-600"
                    type="submit"
                    value="ذخیره"
                  />
                </div>
                <div className="w-full p-2 text-sm font-light h-7">
                  {errors.fullName ? (
                    <ErrorMessage
                      name="fullName"
                      render={(msg) => <p className="text-red-600">{msg}</p>}
                    />
                  ) : (
                    <p className="text-gray-400 ">
                      نام کاربری میتونه اسم کاملت، اسم مستعار و یا اسم کاریت
                      باشه
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="flex flex-col items-start">
            <p
              className="bg-transparent px-2 py-1 rounded-md border border-gray-400 min-w-[13rem] hover:cursor-text text-sm"
              onClick={() => {
                setEditing(true);
              }}
            >
              {user.fullName}
            </p>
            <p className="p-2 pb-0 text-sm font-light text-gray-400">
              نام کاربری میتونه اسم کاملت، اسم مستعار و یا اسم کاریت باشه
            </p>
          </div>
        )}
      </div>

      <div className="px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
        حذف حساب کاربری
        <p className="p-3 text-red-600">به زودی...</p>
      </div>
    </div>
  );
};

export default Account;
