import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/main/course/Course"
import Event from "./pages/main/event/Event"
import Cart from "./pages/main/cart/Cart"
import Profile from "./pages/main/Profile/Profile"
import Resources from "./pages/main/resources/Resources"
import Assessment from "./pages/main/assesment/Assessment"
import Inbox from "./pages/main/Inbox/Inbox"
import Dashactivity from "./pages/main/dashactive/DashActivity";
import Support from "./pages/main/support/Support";

const App = () => {
const user = 1;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        {user ? (
            <Route
              path="/"
              element={
                
                  <Dashboard authorised={true} />
                
              }
            >
              <Route
                path="dashactvity" 
                exact
                element={
                  
                    <Dashactivity />
                  
                }
              />
              <Route
                path="course" 
                element={
                  
                    <Course />
                  
                }
              />
              <Route
                path="cart"
                element={
                  
                    <Cart />
                  
                }
              />
              <Route
                path="event"
                element={
                  
                    <Event />
                  
                }
              />
              <Route
                path="inbox"
                element={
                  
                    <Inbox />
                  
                }
              />

              <Route
                path="assessment"
                element={
                
                    <Assessment />
                 
                }
              />
              <Route
                path="resources"
                element={
                
                    <Resources />
                 
                }
              />
              <Route
                path="profile"
                element={
                 
                    <Profile />
                
                }
              />
              <Route
                path="support"
                element={
                 
                    <Support />
                
                }
              />
            </Route>
          ) : (
          // <Route path="*" element={<ErrorPage />} />
         
            <Route
              path="*"
              element={
                <div className="transition-page">
                <div className="transtion-box">
                  <span className="wave-item">ErrorPage</span>
                  <span className="wave-item"></span>
                  <span className="wave-item"></span>
                  <span className="wave-item"></span>
                  <span className="wave-item"></span>
                </div>
              </div>
              }
            />
          )}
        <Route path="*" element={<NotFound />}/>


        {/* <PrivateRouter path="/dashboard" element={<SignUp />} /> */}
        {/* 
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;