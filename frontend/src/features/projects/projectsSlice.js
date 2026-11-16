import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data/projects";

const projectsSlice = createSlice({
  name: "projects",
  initialState: { items: projects },
  reducers: {},
});

export const selectAllProjects = (state) => state.projects.items;
export const selectProjectBySlug = (state, slug) =>
  state.projects.items.find((p) => p.slug === slug);

export default projectsSlice.reducer;
