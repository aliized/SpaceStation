import * as yup from "yup";

export const commentSchema = yup.object().shape({
    body: yup.string().required("لطفا محتوایی برای کامنت خود وارد کنید"),
  });