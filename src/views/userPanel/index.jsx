import { BlogContext } from "context/BlogContext";
import { Children, useContext } from "react";
import { Outlet } from "react-router-dom";
import PanelSidebar from "./Sidebar";
import Dashboard from "./tabs/Dashboard";

const UserPanel = () => {
  // const { logout, user } = useContext(BlogContext);
  return (
    <div className="py-10 flex mx-auto container">
      <PanelSidebar />
      <div className="flex-1">

      <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;
