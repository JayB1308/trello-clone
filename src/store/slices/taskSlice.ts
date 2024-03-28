import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Task } from "../../types/Task.type";
import { CreateTaskPayload } from "../../types/createTaskPayload.interface";

interface TaskState {
  tasks: Array<Task>;
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<CreateTaskPayload>) {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: nanoid(),
            title: action.payload.title,
            description: action.payload.description,
            listId: action.payload.listId,
          },
        ],
      };
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask } = taskSlice.actions;
