import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/FormReducer";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
