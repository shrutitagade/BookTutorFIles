import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Function to extract video ID from YouTube embed code using regex
const extractVideoIdFromUrl = (url) => {
    // Regular expression to match YouTube video ID in various YouTube URL formats
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;

    // Extract video ID from the URL using regex
    const match = url.match(regex);

    // Return the extracted video ID or null if not found
    return match ? match[1] : null;
};

const AboutTutorPage = () => {
    const auth = localStorage.getItem('tutor');

    if (!auth) {
        return null;
    }

    const navigate = useNavigate();
    const tutor = JSON.parse(auth);
   
    const videoId = extractVideoIdFromUrl(tutor.videos); // Corrected function name

    return (
        <div className="container about-tutor-page">
            <br />
            <div className="about-section mt-4">
                <h2 className="page-title text-center text-dark mb-4">About</h2>
                <div className="tutor-details bg-light p-4 rounded">
                    <h3 className="text-dark">{tutor.name}</h3>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Mobile:</strong> {tutor.mobile}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Email:</strong> {tutor.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Education:</strong> {tutor.education}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Specialization:</strong> {tutor.specialization}</p>
                        </div>
                    </div>
                    <p className="mb-2"><strong></strong> {tutor.about}</p>
                    {videoId && ( // Render video only if video ID is extracted
                        <div className="video-container mt-3">
                            <iframe
                                width="100%"
                                height="315"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutTutorPage;
