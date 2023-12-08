import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes2 = () => {
  const category = JSON.parse(localStorage.getItem("category"));

  return (
    //here we are using outlet componet to route childrens
    category ? <Outlet /> : <Navigate to={"/category"} />
  );
};
export default PrivateRoutes2;
