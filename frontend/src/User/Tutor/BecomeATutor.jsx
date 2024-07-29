import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const BecomeTutorForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [about, setAbout] = useState('');
  const [videos, setVideos] = useState('');
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    let auth = localStorage.getItem('user');
    0
    e.preventDefault();
    let result = await fetch("http://localhost:8080/become-tutor", {
      method: "post",
      body: JSON.stringify({ name, mobile, email, education,specialization,about,videos,userId }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    if(result)
    {
        localStorage.setItem("tutor", JSON.stringify(result));
      alert("Registration successfull")
      navigate("/tutor-profile")
    }
  };

  return (
    <>
     <Navbar />
    <div className="container">
     
      <h2 className="text-center mb-4">Become a Tutor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile:</label>
          <input type="tel" id="mobile" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">Education:</label>
          <input type="text" id="education" className="form-control" value={education} onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="specialization" className="form-label">Specialization:</label>
          <input type="text" id="specialization" className="form-control" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="about" className="form-label">About:</label>
          <textarea id="about" className="form-control" value={about} onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="videos" className="form-label">Enter Video Url</label>
          <input type="text" id="videos" className="form-control" value={videos} onChange={(e) => setVideos(e.target.value)} />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Submit Application</button>
        </div>
      </form>
    </div>
    <br></br>
    <Footer />
    </>
  );
};

export default BecomeTutorForm;
