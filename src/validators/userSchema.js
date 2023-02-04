import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی می باشد"),
  password: yup
    .string()
    .min(8, "کلمه عبور نباید کمتر از 8 کاراکتر باشد")
    .max(40, "کلمه عبور نباید بیشتر از 40 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
  confirmPassword: yup
    .string()
    .required("تکرار کلمه عبور الزامی می باشد")
    .oneOf([yup.ref("password"), null], "کلمه ی عبور و تکرار آن یکسان نیستند"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی می باشد"),
  password: yup
    .string()
    .min(8, "کلمه عبور نباید کمتر از 8 کاراکتر باشد")
    .max(40, "کلمه عبور نباید بیشتر از 40 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
});

export const changeNameSchema = yup.object().shape({
  fullName: yup
    .string()
    .max(40, "نام کاربری نباید بیشتر از 40 کاراکتر باشد")
    .required("نام کاربری الزامی می باشد"),
});
