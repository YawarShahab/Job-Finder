import { Link } from "react-router-dom";
import '../../App.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="prohire">ProHire</h1>
      <nav>
        <Link to="/JobDetails">Jobs</Link>
        <Link to="/CompanyRegistration">Companies</Link>
        <Link to="/">For Employers</Link>
        <Link to="/Login">Login</Link>
        <Link to="/auth" id="signup">Sign Up</Link>
      </nav>
    </header>
  );
}
