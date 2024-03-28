import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  setCurrentUser,
  login,
  logout,
  addUser,
} from "./slices/userSlice";
import {
  projectReducers,
  addProject,
  removeProject,
} from "./slices/projectSlice";
import { listReducer, addList } from "./slices/listSlice";
import { taskReducer, addTask, changeList } from "./slices/taskSlice";
import { modalReducer, open, close } from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    projects: projectReducers,
    list: listReducer,
    task: taskReducer,
    modal: modalReducer,
  },
});

export {
  store,
  addUser,
  login,
  logout,
  setCurrentUser,
  open,
  close,
  addProject,
  removeProject,
  addList,
  addTask,
  changeList,
};
