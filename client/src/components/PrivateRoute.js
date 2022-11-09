import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  return (

    localStorage.getItem(localStorage.key("user")) ? (
      <Outlet />
    ) : (

      <Navigate to="/" replace={true} />

    )

  );
};

export default PrivateRoute;


