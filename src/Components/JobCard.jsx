import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/JobDetails/${job._id}`);
  };

  return (
    <div className="job-card">
      <div className="details">
        <p>{job.featured && " Featured"}</p>
        <h3>{job.title}</h3>
        <p>{job.company} • ⭐ {job.rating}</p>
        <p>
          <span className="loc-span">{job.location}</span> •
          <span className="job-span">{job.jobType}</span> •
          <span className="post-span"> {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })} </span>
        </p>
        <div className="tags">
          {job.tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <div className="salary">{job.salary}</div>
        <button className="apply" onClick={handleApplyClick}>Apply Now</button>
      </div>
    </div>
  );
}
