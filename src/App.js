import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/header";
import Footer from "./Components/Layout/footer";
import Home from "./Pages/Home";
import './App.css';
import Auth from "./Pages/Authentication/PersonalDetail"; 
import ProfessionalDetail from "./Pages/Authentication/ProfessionalDetails";
import Login from "./Pages/Login";
import JobDetail from "./Pages/JobDetails";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import RegisterCompanyForm from "./Pages/CompanyRegistration";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />                
        <Route path="/ProfessionalDetails" element={<ProfessionalDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/JobDetails" element={<JobDetail />} />
        <Route path="/ApplicationFormPage" element={<ApplicationFormPage />} />
        <Route path="/CompanyRegistration" element={<RegisterCompanyForm />} />
        <Route path="/JobDetails/:id" element={<JobDetail />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
