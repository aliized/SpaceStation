import React, { useContext } from "react";

import flyingRocket from "assets/images/flyingRocket.webp";
import { BlogContext } from "context/BlogContext";

const Dashboard = () => {
  const { user } = useContext(BlogContext);

  return (
    <div className="p-4 flex flex-1 flex-col items-center">
      <div className="flex-1 ">
        <img src={flyingRocket} alt="flying-rocket" className="w-[25rem]" />
      </div>
      <div className="flex-1 font-anjoman text-4xl leading-relaxed font-[900]">
        <p>سلام {user.fullName} جان </p>
        <p>به ایستگاه فضایی خوش اومدی</p>
      </div>
    </div>
  );
};

export default Dashboard;
