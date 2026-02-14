import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <div className="link-text">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
