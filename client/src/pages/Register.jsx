import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="container">
            <div className="form-box">
                <h2>Register</h2>

                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />


                <button>Register</button>

                <div className="link-text">
                    Already have an account? <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
