import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const CreateClass = () => {
  const [courseName, setCourseName] = useState('');
  const [tutorName, setTutorName] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [about, setAbout] = useState('');
  const [videos, setVideos] = useState('');
  const [link, setLink] = useState('');
  const navigate=useNavigate();
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(image)
  const handleSubmit = async (e) => {
    e.preventDefault();

    let auth = localStorage.getItem('user');
    const userId = JSON.parse(auth)._id;

    const formData = new FormData();
    formData.append('courseName', courseName);
    formData.append('tutorName', tutorName);
    formData.append('duration', duration);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('education', education);
    formData.append('specialization', specialization);
    formData.append('about', about);
    formData.append('videos', videos);
    formData.append('link', link);
    formData.append('userId', userId);

    try {
      const response = await axios.post('http://localhost:8080/create-class', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response) {
        alert('Class created successfully');
        navigate("/tutor-profile")
        localStorage.setItem("createClass", JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };


  return (
    <>
      <Navbar />
      <div className="container">
<br></br>
        <h2 className="text-center mb-4" style={{color:"darkblue"}}>Fill the form below to create the course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="courseName" className="form-label">Course Name:</label>
            <input type="text" id="courseName" className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="tutorName" className="form-label">Tutor Name:</label>
            <input type="text" id="tutorName" className="form-control" value={tutorName} onChange={(e) => setTutorName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Duration:</label>
            <input type="text" id="duration" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input type="number" id="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
            <input type="file" id="image" className="form-control" onChange={handleFileChange} required />
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
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Enter WhatsApp Link</label>
          <input type="text" id="link" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <br></br>
        </form>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

export default CreateClass;
