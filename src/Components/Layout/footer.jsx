import '../../App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div>
          <h4>JobFinder</h4>
          <p>Connecting talent with opportunity</p>
        </div>
        <div>
          <h4>For Job Seekers</h4>
          <p>Browse Jobs</p>
          <p>Career Resources</p>
        </div>
        <div>
          <h4>For Employers</h4>
          <p>Post a Job</p>
          <p>Find Candidates</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="bottom">
        © 2025 JobFinder. All rights reserved.
      </div>
    </footer>
  );
}
