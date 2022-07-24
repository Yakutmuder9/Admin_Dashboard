import { createAsyncThunk , createSlice  } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_BASEURLAPI;

export const getCourse = createAsyncThunk(
  "courses/getCourse",
  async () => {
    const response = await fetch((`${baseUrl}` + "courses"));
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);


const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    }
  },
  extraReducers: {
    [getCourse.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCourse.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getCourse.rejected]: (state, action) => {
      state.status = 'failed'
    }
  },
});

export const selectCourse = ({ courses }) => courses
export default coursesSlice.reducer

