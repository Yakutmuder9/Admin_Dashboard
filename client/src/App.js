import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";


import Dashboard from "./pages/Dashboard";
import Course from "./pages/main/course/Course"
import Newcourse from "./pages/main/course/Newcourse/Newcourse"
import NewcourseDetail from "./pages/main/course/Newcourse/SingleCourse"
import Event from "./pages/main/event/Event"
import Cart from "./pages/main/cart/Cart"
import Profile from "./pages/main/Profile/Profile"
import Resources from "./pages/main/resources/Resources"
import Assessment from "./pages/main/assesment/Assessment"
import Inbox from "./pages/main/Inbox/Inbox"
import Dashactivity from "./pages/main/dashactive/DashActivity";
import Support from "./pages/main/support/Support";
import ResourcesDetail from "./pages/main/resources/ResourcesDetail";
import Payment from "./pages/main/payment/payment";

const App = () => {
  // console.log(process.env.REACT_APP_APIKEY)
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<SignIn />} />
        <Route path="resetpassword/:resetToken" element={<SignIn />} />


        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="dashboard" exact element={<Dashactivity />} />
            <Route path="course" element={<Course />} />
            <Route path="course/:id" element={<Course />} />
            <Route path="newcourse" element={<Newcourse />} />
            <Route path="newcourse/:id" element={<NewcourseDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="event" element={<Event />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="assessment" element={<Assessment />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/:id" element={<ResourcesDetail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App
