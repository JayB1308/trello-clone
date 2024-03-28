import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    id: null,
    isOpen: false,
  },
  reducers: {
    open(state, action) {
      return {
        ...state,
        isOpen: true,
        id: action.payload.id,
      };
    },
    close(state) {
      return {
        ...state,
        isOpen: false,
        id: null,
      };
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { open, close } = modalSlice.actions;
