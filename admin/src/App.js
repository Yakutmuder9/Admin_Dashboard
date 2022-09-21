import React, { useEffect } from "react";
import "./App.css";
// import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/HomePage/Dashboard";
import AddCourse from "./pages/AddCourse/AddCourse";
import Inbox from "./pages/Inbox";
import Orderpage from "./pages/OrderPage";
import Event from "./pages/Event";
// import AddCourset from "./pages/AddCourse";
import Signin from "./pages/SigninPage";
import Userspage from "./pages/UsersPage";
import Assessment from "./pages/Assessment";
import NotFound from "./pages/NotFound";
import PrivateRouter from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
// import { listCourses } from "./Redux/Actions/ProductActions";
// import { listOrders } from "./Redux/Actions/OrderActions";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 console.log(userInfo)
  // useEffect(() => {
  //   if (userInfo && userInfo.isAdmin) {
  //     dispatch(listProducts());
  //     dispatch(listOrders());
  //   }
  // }, [dispatch, userInfo]);

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      {/* {userInfo?  */}
      <Route path="/" element={<Homepage />} exact>
        <Route path="dashboard" element={
            <Dashboard />} />
        <Route path="/course" element={
            <AddCourse />
        } />

        <Route path="/inbox" element={<Inbox />} />
        <Route path="/course" element={<AddCourse />} />
         <Route path="/event" element={<Event />} /> 
          <Route path="/orders" element={<Orderpage />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/users" element={<Userspage />} />
          {/* <Route
            path="/course/:id/edit"
            element={<ProductEditpage />}
          /> */}
          </Route>
      {/* :<>new</>} */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;