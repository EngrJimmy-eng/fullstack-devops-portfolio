import { useState } from "react";
import { loginAdmin } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/auth/AuthContext";

/**
 * Admin Login Page
 * Handles authentication and stores JWT token
 */
export default function Login() {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigation hook
  const navigate = useNavigate();

  // Auth context (global login state)
  const { login } = useAuth();

  /**
   * Handle login form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send credentials to backend
      const res = await loginAdmin({
        email,
        password,
      });

      /**
       * Expect backend response:
       * {
       *   token: "...",
       *   user: {...}
       * }
       */

      // Save auth data globally + localStorage
      login(res.data);

      // Redirect to admin dashboard
      navigate("/admin");
    } catch (err) {
      console.log(err);

      // Better debugging for production
      alert("Login failed: Invalid credentials or server error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔐 Admin Login</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {/* Submit */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
