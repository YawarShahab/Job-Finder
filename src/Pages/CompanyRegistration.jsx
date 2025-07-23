import React, { useState } from 'react';

const RegisterCompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    industry: "",
    size: "",
    website: "",
    contactName: "",
    jobTitle: "",
    phone: "",
    password: "",
    confirmPassword: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3004/Api/comps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Company registered successfully!');
        setFormData({
          companyName: "",
          companyEmail: "",
          industry: "",
          size: "",
          website: "",
          contactName: "",
          jobTitle: "",
          phone: "",
          password: "",
          confirmPassword: "",
          description: "",
        });
      } else {
        alert('Failed to register company' );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="register-container">
      <h1>Register Your Company</h1>
      <p className="subtitle">Start hiring top talent today</p>

      <form className="form-card" onSubmit={handleSubmit}>
        <fieldset>
          <legend>🏢 Company Information</legend>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name *"
            required
          />
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder="Company Email *"
            required
          />
          <div className="grid-2">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Select industry *</option>
              <option>Tech</option>
              <option>Finance</option>
            </select>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            >
              <option value="">Select size *</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
            </select>
          </div>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website (Optional)"
          />
        </fieldset>

        <fieldset>
          <legend>👤 Contact Person</legend>
          <div className="grid-2">
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Full Name *"
              required
            />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Job Title *"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
          />
        </fieldset>

        <fieldset>
          <legend>🔒 Account Setup</legend>
          <div className="grid-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password *"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password *"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>📄 Additional Information (Optional)</legend>
          <label htmlFor="cdesc">Company Description</label>
          <textarea
            id="cdesc"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of your company and what you do..."
          />
        </fieldset>

        <div className="checkboxes">
          <label>
            <input type="checkbox" required />
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> *
          </label>
          <label>
            <input type="checkbox" />
            Send me hiring tips and platform updates via email
          </label>
        </div>

        <button type="submit" className="submit-btn">Register Company</button>
        <p className="signin-text">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterCompanyForm;
