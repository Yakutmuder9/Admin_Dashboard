import { createAsyncThunk , createSlice  } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_BASEURLAPI;

export const getCart = createAsyncThunk(
  "cart/getCart",
  async () => {
    const response = await fetch(baseUrl + "cart");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    removeCartItem: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    }
  },
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getCart.rejected]: (state, action) => {
      state.status = 'failed'
    }
  },
});


export const { removeCartItem } = cartSlice.actions;

export const selectCart = ({ cart }) => cart
export default cartSlice.reducer

