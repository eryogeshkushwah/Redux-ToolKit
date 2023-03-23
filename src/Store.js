import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Reducers/Reducer";

export const store = configureStore({
  reducer: {
    myReducer: myReducer,
  },
});
