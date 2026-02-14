function Dashboard() {

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
