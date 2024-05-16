import React, { useState } from 'react';
import './CreateResume.css';
import { Link, useNavigate } from 'react-router-dom';

function CreateResume({ getFormData }) {
  const [Details, setDetails] = useState({ name: '', contact: '', email: '' });
  const [Edu, setEdu] = useState([{ university: '', college: '', percentage: '' }]);
  const [Work, setWork] = useState([{ position: '', duration: '', company: '' }]);
  const navigate = useNavigate();

  const DetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const EduChange = (index, e) => {
    const { name, value } = e.target;
    const newEdu = [...Edu];
    newEdu[index][name] = value;
    setEdu(newEdu);
  };

  const WorkChange = (index, e) => {
    const { name, value } = e.target;
    const newWork = [...Work];
    newWork[index][name] = value;
    setWork(newWork);
  };

  const addEdu = () => {
    setEdu([...Edu, { university: '', college: '', percentage: '' }]);
  };

  const removeEdu = (index) => {
    const newEdu = [...Edu];
    newEdu.splice(index, 1);
    setEdu(newEdu);
  };

  const addWork = () => {
    setWork([...Work, { position: '', duration: '', company: '' }]);
  };

  const removeWork = (index) => {
    const newWork = [...Work];
    newWork.splice(index, 1);
    setWork(newWork);
  };

  const resumeSubmit = (e) => {
    e.preventDefault();
    const formData = { Details, Edu, Work };
    getFormData(formData);
    navigate('/Resume');
  };

  return (
    <div>
      <form className="resume-form" onSubmit={resumeSubmit}>
        <Link to="/">
          <button type="button" className="button-resume-back">Go back</button>
        </Link>
        <h2>Personal Details</h2>
        <input type="text" name="name" placeholder="Name" value={Details.name} onChange={DetailsChange} required />
        <input type="text" name="contact" placeholder="Contact" value={Details.contact} onChange={DetailsChange} required />
        <input type="email" name="email" placeholder="Email" value={Details.email} onChange={DetailsChange} required />

        <h2>Educational Qualifications</h2>
        {Edu.map((edu, index) => (
          <div key={index} className="education">
            <input type="text" name="university" placeholder="University" value={edu.university} onChange={(e) => EduChange(index, e)} required />
            <input type="text" name="college" placeholder="College/School" value={edu.college} onChange={(e) => EduChange(index, e)} required />
            <input type="text" name="percentage" placeholder="Percentage" value={edu.percentage} onChange={(e) => EduChange(index, e)} required />
            <button type="button" className="button-resume" onClick={() => removeEdu(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="button-resume" onClick={addEdu}>Add More</button>

        <h2>Work Experience</h2>
        {Work.map((work, index) => (
          <div key={index} className="work">
            <input type="text" name="position" placeholder="Position" value={work.position} onChange={(e) => WorkChange(index, e)} />
            <input type="text" name="duration" placeholder="Duration in months" value={work.duration} onChange={(e) => WorkChange(index, e)} />
            <input type="text" name="company" placeholder="Company" value={work.company} onChange={(e) => WorkChange(index, e)} />
            <button type="button" className="button-resume" onClick={() => removeWork(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="button-resume" onClick={addWork}>Add More</button>

        <button type="submit" className="button-resume-submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateResume;
