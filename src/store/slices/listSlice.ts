import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { List } from "../../core/types/list.type";
import { CreateListPayload } from "../../core/interfaces/create-list-payload.interface";

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
    addList(state: ListState, action: PayloadAction<CreateListPayload>) {
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

    removeList(state, action: PayloadAction<{ id: string }>) {
      return {
        ...state,
        lists: state.lists.filter((list) => list.id != action.payload.id),
      };
    },
  },
});

export const listReducer = listSlice.reducer;
export const { addList, removeList } = listSlice.actions;
