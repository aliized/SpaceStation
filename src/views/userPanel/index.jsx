import { Outlet } from "react-router-dom";

import PanelSidebar from "./Sidebar";

const UserPanel = () => {
  // const { logout, user } = useContext(BlogContext);
  return (
    <div className="md:py-10 flex flex-col md:flex-row md:container mx-auto w-full">
      <PanelSidebar />
      <div className="flex-1 pb-4 px-2">
        <Outlet />
        
      </div>
    </div>
  );
};

export default UserPanel;
