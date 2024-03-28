import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    users: [],
    currentUser: null,
  },
  reducers: {
    addUser() {},
    login() {},
    setCurrentUser() {},
    logout() {},
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, login, logout, setCurrentUser } = userSlice.actions;
