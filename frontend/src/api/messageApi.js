import api from "./axios";

// Get all messages (admin panel)
export const getMessages = () => {
  return api.get("/admin/messages");
};

// Delete a message
export const deleteMessage = (id) => {
  return api.delete(`/admin/messages/${id}`);
};

// Send contact message (frontend form)
export const sendMessage = (data) => {
  return api.post("/contact", data);
};
