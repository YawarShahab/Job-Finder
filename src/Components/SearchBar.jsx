export default function SearchBar() {
  return (
    <div className="hero">
      <h2>Discover Your Dream Job</h2>
      <p>Find opportunities that match your skills and aspirations</p>
      <div className="search-bar">
        <input type="text" placeholder  ="Job title, keywords, or company" />
        <input type="text" placeholder="Location" />
        <select>
          <option>Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
        <button>Search Jobs</button>
      </div>
    </div>
  );
}
