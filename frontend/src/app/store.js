import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projects/projectsSlice";

export const makeStore = (preloadedState) =>
  configureStore({ reducer: { projects: projectsReducer }, preloadedState });

export const store = makeStore();
