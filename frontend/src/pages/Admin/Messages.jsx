import { useEffect, useState } from "react";
import { getMessages } from "../../api/messageApi";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Messages ({messages.length})</h2>

      {loading && <p>Loading messages...</p>}

      {!loading && messages.length === 0 && (
        <p>No messages found.</p>
      )}

      {!loading &&
        messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: "12px",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
            }}
          >
            <p>
              <b>Name:</b> {msg.name}
            </p>

            <p>
              <b>Email:</b> {msg.email}
            </p>

            <p>
              <b>Message:</b>
            </p>

            <p>{msg.message}</p>

            {msg.created_at && (
              <small style={{ color: "#666" }}>
                {new Date(msg.created_at).toLocaleString()}
              </small>
            )}
          </div>
        ))}
    </div>
  );
}
