import { BlogContext } from "context/BlogContext";
import { useContext } from "react";

const Dashboard = () => {
  const { logout } = useContext(BlogContext);
  return (
    <div className="mx-auto py-20 font-bold text-4xl flex flex-col items-center gap-6">
      <p className="bg-orange-600 bg-opacity-40 p-4 rounded-md">dashboard</p>
      <button type="button" onClick={logout} className="text-base bg-red-600 rounded-md py-2 px-4">خروج از حساب کاربری</button>
    </div>
  );
};

export default Dashboard;
