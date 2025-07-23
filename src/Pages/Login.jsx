import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3004/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
    } else {
      alert("Login successful!");
      localStorage.setItem("userToken", data.token);
      navigate("/");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong");
  }
};

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Sign in to continue your job search</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <Link to="#" className="forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>

          <div className="divider">Or continue with</div>

          <div className="social-login">
            <button className="social-btn"><FaGoogle /> Google</button>
            <button className="social-btn"><FaLinkedin /> LinkedIn</button>
          </div>

          <p className="signup-link">
            Don't have an account? <Link to="/auth">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
