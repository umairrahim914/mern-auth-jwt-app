import axios from "../utils/axios";
import { useEffect } from "react";
function Dashboard() {

  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/auth/me");
      console.log(res.data);
    };

    fetchUser();
  }, []);


  const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

<button onClick={logout}>Logout</button>

  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to Dashboard</h2>
      </div>
    </div>
  );
}

export default Dashboard;
