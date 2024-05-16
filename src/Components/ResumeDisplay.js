import React from 'react';
import './ResumeDisplay.css';
import { Link, useNavigate } from 'react-router-dom';
function ResumeDisplay({ formData }) {
  return (
    <div className="resume-display">
      <div className="header">
        <h1>{formData.Details.name}</h1>
        <p>Contact: {formData.Details.contact}</p>
        <p>Email: {formData.Details.email}</p>
  </div>

      <section className="section">
        <h2>Educational Qualifications</h2>
        {formData.Edu.map((edu, index) => (
        <div key={index} className="education">
            <h3>{edu.university}</h3>
           <p>{edu.college}</p>
           <p>Percentage: {edu.percentage}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        {formData.Work.map((work, index) => (
      <div key={index} className="work">
            <h3>{work.position}</h3>
           <p>Company: {work.company}</p>
            <p>Duration: {work.duration}</p>
        </div>
        ))}
      </section>
      <div>
      <Link to="/newResume">
          <button type="button" className="button-resume-back">Go back</button>
        </Link>
    </div>
    </div>
    
  );
}

export default ResumeDisplay;
