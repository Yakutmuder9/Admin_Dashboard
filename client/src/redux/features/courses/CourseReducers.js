
import * as actionTypes from "./CourseConstants";

export const getCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSE_REQUEST:
      return {
        loading: true,
        courses: [],
      };
    case actionTypes.GET_COURSE_SUCCESS:
      return {
        courses: action.payload,
        loading: false,
      };
    case actionTypes.GET_COURSE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCourseDetailsReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_COURSE_DETAILS_SUCCESS:
      return {
        loading: false,
        course: action.payload,
      };
    case actionTypes.GET_COURSE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_COURSE_DETAILS_RESET:
      return {
        course: {},
      };
    default:
      return state;
  }
};









// import {
//   COURSE_CREATE_REVIEW_FAIL,
//   COURSE_CREATE_REVIEW_REQUEST,
//   COURSE_CREATE_REVIEW_RESET,
//   COURSE_CREATE_REVIEW_SUCCESS,
//   COURSE_DETAILS_FAIL,
//   COURSE_DETAILS_REQUEST,
//   COURSE_DETAILS_SUCCESS,
//   COURSE_LIST_FAIL,
//   COURSE_LIST_REQUEST,
//   COURSE_LIST_SUCCESS,
// } from "./CourseConstants";

// // COURSE LIST
// export const courseListReducer = (state = { courses: [] }, action) => {
//   switch (action.type) {
//     case COURSE_LIST_REQUEST:
//       return { loading: true, courses: [] };
//     case COURSE_LIST_SUCCESS:
//       return {
//         loading: false,
//         pages: action.payload.pages,
//         page: action.payload.page,
//         courses: action.payload.courses,
//       };
//     case COURSE_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// // SINGLE COURSE
// export const courseDetailsReducer = (
//   state = { course: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case COURSE_DETAILS_REQUEST:
//       return { ...state, loading: true };
//     case COURSE_DETAILS_SUCCESS:
//       return { loading: false, course: action.payload };
//     case COURSE_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// // COURSE REVIEW CREATE
// export const courseCreateReviewReducer = (state = {}, action) => {
//   switch (action.type) {
//     case COURSE_CREATE_REVIEW_REQUEST:
//       return { loading: true };
//     case COURSE_CREATE_REVIEW_SUCCESS:
//       return { loading: false, success: true };
//     case COURSE_CREATE_REVIEW_FAIL:
//       return { loading: false, error: action.payload };
//     case COURSE_CREATE_REVIEW_RESET:
//       return {};
//     default:
//       return state;
//   }
// };
