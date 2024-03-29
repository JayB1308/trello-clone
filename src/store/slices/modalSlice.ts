import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    id: null,
    isOpen: false,
  },
  reducers: {
    open(state, action) {
      //Using an ID here to make sure other modals other than the one specified are not triggered
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
