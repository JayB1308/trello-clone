import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    open(state) {
      return {
        ...state,
        isOpen: true,
      };
    },
    close(state) {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { open, close } = modalSlice.actions;
