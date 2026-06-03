import { Link } from "react-router-dom";

/**
 * Admin Dashboard
 * This is the main control center for the admin panel.
 * From here, the admin can navigate to different management pages.
 */
export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛠️ Admin Dashboard</h1>

      {/* Simple navigation cards */}
      <div style={{ marginTop: "20px" }}>
        
        {/* Link to Messages page */}
        <div style={{ marginBottom: "10px" }}>
          <Link to="/admin/messages">📩 View Messages</Link>
        </div>

        {/* Future expansion links */}
        <div style={{ marginBottom: "10px" }}>
          <Link to="/admin">📊 Dashboard Home</Link>
        </div>

      </div>

      <hr />

      {/* Quick info section */}
      <p>
        Welcome to the admin panel. Use the links above to manage website data.
      </p>
    </div>
  );
}
