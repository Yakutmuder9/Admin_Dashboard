import { configureStore } from "@reduxjs/toolkit";
import {
  getCourseDetailsReducer,
  getCoursesReducer,
} from "../features/courses/CourseReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "../features/users/userReducers";
import cartReducer  from "../features/cart/cartSlices";

export const store = configureStore({
  reducer: {
    getCourses: getCoursesReducer,
    getCourseDetails: getCourseDetailsReducer,
    cart: cartReducer,
    // courseReviewCreate: courseCreateReviewReducer,
    // userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
    // userDetails: userDetailsReducer,
    // userUpdateProfile: userUpdateProfileReducer,
  },
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;



