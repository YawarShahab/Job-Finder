import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:3004/api/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Error fetching job:", err);
      }
    };
    fetchJob();
  }, [id]);

  const apply = () => {
    navigate("/ApplicationFormPage");
  };

  const handleApplyClick = () => {
    navigate("/ApplicationFormPage");
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div className="job-container">
      <div className="job-header">
        <div className="job-info">
          <h1 className="job-title">{job.title}</h1>
          <div className="company-info">
            <span className="company-name">{job.company}</span>
            <span className="rating">⭐ {job.rating}</span>
          </div>
          <div className="meta-info">
            <span>📍 {job.location}</span>
            <span>⏰ {job.jobType}</span>
            <span>🕒 {new Date(job.postedAt).toLocaleDateString()}</span>
            <span className="salary">{job.salary}</span>
          </div>
        </div>
        <button className="apply-now" onClick={apply}>Apply Now</button>
      </div>

      <section>
        <h2 className='jobdescription'>Job Description</h2>
        <p>{job.description}</p>
      </section>

      <section>
        <h2 className='keyskills'>Key Skills</h2>
        <div className="skills">
          {job.skills?.map((tag) => (
            <span className="skill-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </section>
      
         <section>
        <h2 className='jobdescription'> &nbsp; Requirements</h2>
        <p>{job.requirements}</p>
      </section>

         <section>
        <h2 className='jobdescription'> &nbsp; &nbsp; &nbsp; Benefits</h2>
        <p>{job.benefits}</p>
      </section>


       <button className="apply-now" id='newapp-b' onClick={handleApplyClick}>Apply For this Application</button>


    </div>
  );
};

export default JobDetailsPage;
