import SearchBar from "../Components/SearchBar";
import JobCard from "../Components/JobCard";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {

const [JobList, setJobList]= useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3004/api/jobs") 
      .then((res) => {
        setJobList(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
      });
  }, []);

  return (
    <>
      <SearchBar />
      <div className="main-div">
        <h2 className="job-div">{JobList.length} Jobs Available</h2>
        {JobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <div>
          <button >View All Jobs</button>
        </div>
      </div>
    </>
  );
}
