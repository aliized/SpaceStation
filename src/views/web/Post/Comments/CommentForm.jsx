import { ErrorMessage, Field, Form, Formik } from "formik";
import { commentSchema } from "validators/commentSchema";

const CommentForm = ({
  submitLabel,
  handleSubmit,
  initialText = "",

  hasCancelButton = false,
  handleCancel,
  parentId = null,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          message: initialText,
        }}
        validationSchema={commentSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, { resetForm }, parentId);
        }}
      >
        {({ errors, isSubmitting, dirty }) => (
          <>
            <Form className="flex flex-col gap-1 w-full text-sm">
              <Field
                id="message"
                component="textarea"
                rows="4"
                placeholder="متن نظرت رو اینجا وارد کن"
                name="message"
                className="border-2 border-gray-300 outline-none rounded-md py-2 px-3 resize-none text-gray-700 w-full"
              />

              <div className="text-sm text-red-600 px-2 duration-150">
                {errors.message ? (
                  <ErrorMessage component="span" name="message" />
                ) : null}
              </div>

              <div className="flex gap-3 pb-2">
                {hasCancelButton && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-5 py-2 text-white bg-gray-300  rounded-full duration-100 cursor-pointer hover:bg-red-400 inline-block w-28"
                  >
                    لغو
                  </button>
                )}
                <button
                  disabled={isSubmitting || !dirty}
                  type="submit"
                  className={`px-5 py-2 text-white bg-gray-400  rounded-full duration-100  inline-block w-28 ${
                    isSubmitting || !dirty
                      ? null
                      : "cursor-pointer hover:bg-blue-500"
                  }`}
                >
                  {submitLabel}
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default CommentForm;
