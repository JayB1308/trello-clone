import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Task } from "../../core/types/task.type";
import { CreateTaskPayload } from "../../core/interfaces/create-task-payload.interface";

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
            assignedUser: action.payload.assignedUser,
            dueDate: action.payload.dueDate,
            listId: action.payload.listId,
          },
        ],
      };
    },

    changeList(
      state,
      action: PayloadAction<{ taskID: string; listID: string }>
    ) {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.taskID) {
            return task;
          }
          return {
            ...task,
            listId: action.payload.listID,
          };
        }),
      };
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, changeList } = taskSlice.actions;
