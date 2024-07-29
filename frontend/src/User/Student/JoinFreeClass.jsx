// JoinClassForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function JoinClassForm({ tutorId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [education, setEducation] = useState('');
  const [courseName, setCourseName] = useState('');
  const [college, setCollege] = useState('');
  const navigate = useNavigate();
  const submit = localStorage.getItem('submit');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let tutor = localStorage.getItem('tutor');
    let userId=JSON.parse(tutor).userId;
    console.log(userId)
    // const joinedCourses = JSON.parse(localStorage.getItem('joinedCourses'))
    
    // let userId = joinedCourses._id;
    // console.log(joinedCourses)
    let result = await fetch("http://localhost:8080/student-join-course", {
      method: "post",
      body: JSON.stringify({ name, email, mobile, education,courseName, college, userId }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();

    if (result) {
      localStorage.setItem("student", JSON.stringify(result));
      localStorage.setItem('submit', 'true');
      alert("Course Joined Successfully");
      navigate("/student-profile");
    }
  };

  return (
    <>
     <Navbar />
    <div className="container">
     
      <form onSubmit={handleSubmit} className="mt-4 p-4 shadow rounded bg-light">
        <h2 className="text-center mb-4">Join Class</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">Education</label>
          <select className="form-select" id="education" value={education} onChange={(e) => setEducation(e.target.value)}>
            <option value="">Select Education</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="12th">12th</option>
            <option value="10th">10th</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="college" className="form-label">Course Name</label>
          <input type="text" className="form-control" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="college" className="form-label">College Name</label>
          <input type="text" className="form-control" id="college" value={college} onChange={(e) => setCollege(e.target.value)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <br></br>
    <Footer />
    </>
  );
}

export default JoinClassForm;
