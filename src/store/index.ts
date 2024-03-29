import { configureStore } from "@reduxjs/toolkit";
import { userReducer, login, logout, addUser } from "./slices/userSlice";
import {
  projectReducer,
  addProject,
  removeProject,
} from "./slices/projectSlice";
import { listReducer, addList, removeList } from "./slices/listSlice";
import {
  taskReducer,
  addTask,
  changeList,
  removeTask,
} from "./slices/taskSlice";
import { modalReducer, open, close } from "./slices/modalSlice";
import { loadState, saveState } from "./localStorage";
import { RootState } from "./root-state.type";
import { data } from "./data";

const preloadedState: RootState = data;

let state = loadState();

if (!state) {
  state = preloadedState;
}

const store = configureStore({
  reducer: {
    //@@ts-expect-error
    user: userReducer,
    project: projectReducer,
    list: listReducer,
    task: taskReducer,
    modal: modalReducer,
  },
  preloadedState: state,
});

store.subscribe(() => {
  saveState(store.getState());
});

export {
  store,
  addUser,
  login,
  logout,
  open,
  close,
  addProject,
  removeProject,
  addList,
  removeList,
  addTask,
  changeList,
  removeTask,
};
