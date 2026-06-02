import api from "./axios";

export const loginAdmin = (data) => api.post("/auth/login", data);
