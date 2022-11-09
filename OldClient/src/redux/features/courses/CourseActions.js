import * as actionTypes from "./CourseConstants";
import axios from "axios";

export const getCourses = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COURSE_REQUEST });

    const { data } = await axios.get("/courses");
    dispatch({
      type: actionTypes.GET_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COURSE_DETAILS_REQUEST });

    const { data } = await axios.get(`/courses/${id}`);

    dispatch({
      type: actionTypes.GET_COURSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COURSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeCourseDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_COURSE_DETAILS_RESET });
};




