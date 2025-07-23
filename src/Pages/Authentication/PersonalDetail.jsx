import { useState } from "react";
import ProfessionalDetail from "./ProfessionalDetails";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  localStorage.setItem("signupStep1", JSON.stringify(formData));
  navigate("/ProfessionalDetails");
};


  const StepTwo = () => {
    navigate("/ProfessionalDetails");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Your Account</h2>
        <p className="auth-subtitle">Basic information to get started</p>
        <div className="auth-steps">
          <button className="step step-active">1</button>
          <button onClick={StepTwo} className="step">2</button>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" />
          </div>
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" />
          <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" />
          <div className="form-row">
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" />
            <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" />
          </div>
          <button onClick={StepTwo} className="auth-button">Continue</button>
        </form>
        <div className="auth-divider">Or register with</div>
        <div className="auth-social">
          <button className="social-button">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            <span>Google</span>
          </button>
          <button className="social-button">
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </button>
        </div>
        <p className="auth-footer">
          Don't have an account? <a href="/auth">Sign up</a>
        </p>
      </div>
    </div>
  );
}
