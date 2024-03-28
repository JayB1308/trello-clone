import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { CreateUserPayload } from "../../core/interfaces/create-user-payload.interface";
import { User } from "../../core/types/user.type";

interface UserState {
  users: Array<User>;
  isLoggedIn: boolean;
  currentUser: User | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser(state, action: PayloadAction<CreateUserPayload>) {
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: nanoid(),
            username: action.payload.username,
            email: action.payload.email,
            password: action.payload.password,
          },
        ],
      };
    },
    login(state, action: PayloadAction<User>) {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    },
    logout(state) {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, login, logout } = userSlice.actions;
