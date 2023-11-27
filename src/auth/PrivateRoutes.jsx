import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = JSON.parse(localStorage.getItem("form-data"));

  return (
    //here we are using outlet componet to route childrens
    user ? <Outlet /> : <Navigate to={"/"} />
  );
};
export default PrivateRoutes;
