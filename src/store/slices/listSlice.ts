import { createSlice, nanoid } from "@reduxjs/toolkit";
import { List } from "../../core/types/list.type";

interface ListState {
  lists: Array<List>;
}

const initialState: ListState = {
  lists: [],
};

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList(state: ListState, action) {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            name: action.payload.name,
            projectId: action.payload.projectId,
          },
        ],
      };
    },
  },
});

export const listReducer = listSlice.reducer;
export const { addList } = listSlice.actions;
