import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  description: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm(state, action) {
      return { ...state, ...action.payload };
    },
    fetchFormSuccess(state, action) {
      return { ...state, ...action.payload };
    },
    submitFormSuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm, fetchFormSuccess, submitFormSuccess } =
  formSlice.actions;
export default formSlice.reducer;
