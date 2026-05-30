import { useEffect, useState } from "react";
import { getToken, logout } from "../utils/auth";

export default function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();

      const res = await fetch("/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      setData(result.message);
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
