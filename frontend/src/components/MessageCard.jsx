export default function MessageCard({ msg }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#fff"
      }}
    >
      <p><strong>Name:</strong> {msg.name}</p>
      <p><strong>Email:</strong> {msg.email}</p>
      <p><strong>Message:</strong> {msg.message}</p>

      {msg.created_at && (
        <small>
          {new Date(msg.created_at).toLocaleString()}
        </small>
      )}
    </div>
  );
}
