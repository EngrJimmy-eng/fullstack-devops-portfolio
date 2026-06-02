import { useEffect, useState } from "react";
import { getMessages } from "../../api/messageApi";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await getMessages();
    setMessages(res.data);
  };

  return (
    <div>
      <h2>Messages</h2>

      {messages.map((msg) => (
        <div key={msg.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p><b>Message:</b> {msg.message}</p>
        </div>
      ))}
    </div>
  );
}
