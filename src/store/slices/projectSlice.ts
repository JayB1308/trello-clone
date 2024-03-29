import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../core/types/project.type";
import { CreateProjectPayload } from "../../core/interfaces/create-project-payload.interface";

interface ProjectState {
  projects: Array<Project>;
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<CreateProjectPayload>) {
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: nanoid(),
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };
    },

    removeProject(state, action: PayloadAction<{ id: string }>) {
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id != action.payload.id
        ),
      };
    },
  },
});

export const projectReducer = projectSlice.reducer;
export const { addProject, removeProject } = projectSlice.actions;
