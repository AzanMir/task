import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/FormReducer.jsx";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
