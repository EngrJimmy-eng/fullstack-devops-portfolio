import api from "./axios";

export const getMessages = () => api.get("/admin/messages");
export const deleteMessage = (id) => api.delete(`/admin/messages/${id}`);
