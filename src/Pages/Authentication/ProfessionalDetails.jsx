import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfessionalDetail() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    experience: "",
    location: "",
    skills: "",
    resume: null,
    linkedin: "",
    github: "",
    portfolio: "",
    bio: "",
    jobType: "",
    salary: "",
    remote: false,
    agreeTerms: false,
    receiveEmails: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.agreeTerms) {
    alert("You must agree to the Terms and Privacy Policy.");
    return;
  }

  // Get step 1 data
  const personalData = JSON.parse(localStorage.getItem("signupStep1"));
  if (!personalData) {
    alert("Missing personal information. Please restart the signup process.");
    navigate("/auth");
    return;
  }

  // Combine both step 1 and 2 data
  const combinedData = {
    ...personalData,
    ...formData,
    resume: formData.resume?.name || "", // just store filename for now
  };

  try {
    const response = await fetch("http://localhost:3004/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combinedData),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.message || "Failed to create account.");
    } else {
      alert("Account created successfully!");
      localStorage.removeItem("signupStep1");
      navigate("/login");
    }
  } catch (error) {
    console.error("Signup Error:", error);
    alert("Something went wrong.");
  }
};


  const handlePrevious = () => {
    navigate("/auth"); 
  };

  const StepOne = ()=>{
    navigate("/auth");
  };
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Create Your Account</h2>
        <p>Professional details to enhance your profile</p>

        <div className="steps">
          <button onClick={StepOne} className="step ">1</button>
          <button className="step-active">2</button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            type="text"
            placeholder="Current Job Title"
          />

          <select name="experience" value={formData.experience} onChange={handleChange}>
            <option value="">Select experience</option>
            <option value="0-1">0-1 Years</option>
            <option value="1-3">1-3 Years</option>
            <option value="3+">3+ Years</option>
          </select>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            placeholder="Location"
          />

          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Key Skills (e.g., React, Node.js...)"
          ></textarea>

          <label className="file-upload">
            Upload Resume (PDF, DOC, DOCX)
            <input type="file" name="resume" onChange={handleChange} />
          </label>

          <div className="input-row">
            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              type="url"
              placeholder="LinkedIn Profile"
            />
            <input
              name="github"
              value={formData.github}
              onChange={handleChange}
              type="url"
              placeholder="GitHub Profile"
            />
          </div>

          <input
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            type="url"
            placeholder="Portfolio Website"
          />

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Professional Bio"
          ></textarea>

          <label>Job Preferences (Optional)</label>
          <div className="input-row">
            <select name="jobType" value={formData.jobType} onChange={handleChange}>
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
            <select name="salary" value={formData.salary} onChange={handleChange}>
              <option value="">Select salary range</option>
              <option value="20k-40k">20k - 40k</option>
              <option value="40k-60k">40k - 60k</option>
              <option value="60k+">60k+</option>
            </select>
          </div>

          <label className="checkbox" id="remote-chk">
            <input
              type="checkbox"
              name="remote"
              checked={formData.remote}
              onChange={handleChange}
            />
            Open to remote work opportunities
          </label>

          <div className="checkbox-container">
            <label className="checkbox">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                name="receiveEmails"
                checked={formData.receiveEmails}
                onChange={handleChange}
              />
              I want to receive job alerts and career updates via email
            </label>
          </div>

          <div className="button-row">
            <button type="button" className="btn-secondary" onClick={handlePrevious}>
              Previous
            </button>
            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </div>
        </form>

        <p className="footer-note">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
