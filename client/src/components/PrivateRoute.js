import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/users/usersSlice";


const PrivateRoute = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth);
  const { isLoggedIn } = auth;

  useEffect(() => {
    dispatch(SET_LOGIN);
  }, [dispatch]);
 
  console.log(SET_LOGIN);
  return (

    localStorage.getItem(localStorage.key("user")) ? (
    // isLoggedIn ? (
      <Outlet />
    ) : (

      <Navigate to="/" replace={true} />

    )

  );
};

export default PrivateRoute;


