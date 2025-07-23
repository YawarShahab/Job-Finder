import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
    linkedin: "",
    github: "",
    portfolio: "",
    startDate: "",
    referral: "",
    relocate: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      // Assuming you want to store the filename for now (real uploads need FormData)
      setFormData(prev => ({ ...prev, resume: files[0]?.name || "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3004/Api/apps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          coverLetter: "",
          linkedin: "",
          github: "",
          portfolio: "",
          startDate: "",
          referral: "",
          relocate: false,
        });
      } else {
        alert("Failed to submit application.");
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  const backpage = () => {
    navigate("/JobDetails");
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <div>
          <h1 className="jobs-title">Senior Frontend Developer</h1>
          <div className="company-info">
            <span className="company">TechCorp Solutions</span>
            <span className="rating">⭐ 4.8</span>
          </div>
          <div className="meta-info">
            <span>📍 New York, NY</span>
            <span>⏰ Full-time</span>
            <span>🕒 2 days ago</span>
            <span className="salary">$90,000 - $120,000</span>
          </div>
        </div>
        <button className="details-button">View Details</button>
      </div>

      <h2 className="form-title">Application Form</h2>

      <form className="form-section" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              title="Upload Resume"
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Additional Information</legend>
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>
          <div className="form-grid">
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub Profile"
              value={formData.github}
              onChange={handleChange}
            />
            <input
              type="url"
              name="portfolio"
              placeholder="Portfolio Website"
              value={formData.portfolio}
              onChange={handleChange}
            />
            <input
              type="date"
              name="startDate"
              placeholder="Earliest Start Date"
              value={formData.startDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="referral"
              placeholder="How did you hear about us?"
              value={formData.referral}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="relocate"
              name="relocate"
              checked={formData.relocate}
              onChange={handleChange}
            />
            <label htmlFor="relocate">I am willing to relocate if necessary</label>
          </div>
        </fieldset>

        <div className="disclaimer">
          <span>
            By submitting this application, I certify that all information provided is accurate...
          </span>
        </div>

        <div className="form-buttons">
          <button onClick={backpage} type="button" className="back-btn">
            Back to Details
          </button>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
