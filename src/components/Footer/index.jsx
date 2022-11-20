const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 bottom-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-around py-12 gap-8">
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-2xl p-3 border-solid border-b-8 gradborder">
              دسترسی سریع
            </p>
            <p>صفحه نخست</p>
            <p>عضویت در سایت</p>
            <p>ورود به سایت</p>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-2xl p-3 border-solid border-b-8 gradborder">
              پشتیانی{" "}
            </p>
            <p>صفحه نخست</p>
            <p>عضویت در سایت</p>
            <p>ورود به سایت</p>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-2xl p-3 border-solid border-b-8 gradborder">
              درباره ما{" "}
            </p>
            <p>صفحه نخست</p>
            <p>عضویت در سایت</p>
            <p>ورود به سایت</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
