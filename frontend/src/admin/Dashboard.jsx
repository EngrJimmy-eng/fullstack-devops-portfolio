import { useEffect, useState } from "react";
import { getToken, logout } from "../utils/auth";

export default function Dashboard() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();

        if (!token) {
          setData("No token found. Please login again.");
          return;
        }

        const res = await fetch("/api/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (result.success) {
          setData(result.message);
        } else {
          setData(result.message || "Access denied");
        }

      } catch (err) {
        console.error(err);
        setData("Server error or network issue");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Dashboard</h2>

      <p>{data}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
