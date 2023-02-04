import * as yup from "yup";

export const commentSchema = yup.object().shape({
  message: yup
    .string()
    .required("لطفا متنی برای نظر خود وارد کنید.")
    .max(1000, "حداکثر میتوانید در نظر خود 1000 کاراکتر وارد کنید"),
});
