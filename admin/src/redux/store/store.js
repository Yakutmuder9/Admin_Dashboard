import { configureStore } from "@reduxjs/toolkit";
import coursesReducer  from "../features/courses/coursesSlice";
import courseEnrolledReducer from "../features/courses/courseEnrolledSlice";
import cartReducer from "../features/cart/cartSlice"
import { userListReducer, userLoginReducer } from "../features/users/userReducers";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    courseEnrolled: courseEnrolledReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userList: userListReducer,
  },
});




// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./userRedux";
// import productReducer from "./productRedux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   product: productReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);
