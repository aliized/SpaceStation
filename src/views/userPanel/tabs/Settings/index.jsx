const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
       <div className="border-2 border-gray-800 bg-gray-800 bg-opacity-70 rounded-3xl py-5 px-8">
        تغییر شماره یا ایمیل
        <p className="text-red-500 p-3">در حال توسعه...</p>
      </div>
      <div className="border-2 border-gray-800 bg-gray-800 bg-opacity-70 rounded-3xl py-5 px-8">
        تغییر کلمه عبور
        <p className="text-red-500 p-3">در حال توسعه...</p>
      </div>
      <div className="px-8 py-5 bg-gray-800 border-2 border-gray-800 bg-opacity-70 rounded-3xl">
        حذف حساب کاربری
        <p className="p-3 text-red-500">در حال توسعه...</p>
      </div>
    </div>
  );
};

export default Settings;
