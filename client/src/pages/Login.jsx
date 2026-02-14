import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>

        <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button>Login</button>

        <div className="link-text">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
