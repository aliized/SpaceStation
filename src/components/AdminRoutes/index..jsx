import React, {  useState } from "react";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  // const authContext = useContext(AuthContext)
  const [role] = useState("ADMIN");
  
  return (
    <>
    {role === "ADMIN" ? <>{children}</> : <Navigate to="/" />}
    </>
  );
};

export default AdminRoutes;
