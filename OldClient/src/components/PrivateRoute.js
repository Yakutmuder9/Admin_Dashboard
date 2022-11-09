import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  return (

    localStorage.getItem(localStorage.key("user")) ? (
      <Outlet />
    ) : (

      <Navigate to="/login" replace={true} />

    )

  );
};

export default PrivateRoute;


