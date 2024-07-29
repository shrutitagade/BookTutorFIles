import React from 'react';
import { NavLink } from 'react-router-dom';

function StudentClasses() {
  const joinedCourses = JSON.parse(localStorage.getItem('joinedCourses'));
  const submit = JSON.parse(localStorage.getItem('submit')); // Retrieve submit status from localStorage
  if (!joinedCourses) {
    return null;
  }

  // Use a Set to store unique course IDs
  const uniqueCourseIds = new Set();

  // Filter out duplicate course IDs
  const uniqueJoinedCourses = joinedCourses.filter(item => {
    if (!uniqueCourseIds.has(item._id)) {
      uniqueCourseIds.add(item._id);
      return true;
    }
    return false;
  });

  if (!submit || !uniqueJoinedCourses || uniqueJoinedCourses.length === 0) {
    return (
      <div className="empty-courses">No courses joined yet.</div>
    );
  }

  return (
    <>
      <div className="student-classes-container">
        <h2 className="page-title justify-content-center" align="center">Joined Courses</h2>
        <div className='container'>
          <div className='row'>
            {uniqueJoinedCourses.map((course, index) => (
              <div className='col-md-4' key={index}>
                <div className="card" style={{border:"1px solid rgb(58, 58, 97)"}}>
                  <img className="card-img" src={`http://localhost:8080/${course?.imageUrl}`} alt="Course" />
                  <div className="card-body">
                    <h5 className='card-title'>{course.courseName}</h5>
                    <p className='card-text'>Tutor: {course.tutorName}</p>
                    <p className='card-text'>Duration: {course.duration}</p>
                    <p className='card-text'>Price: {course.price}</p>
                    <div className="text-center">
                      {/* Add Bootstrap button classes, custom CSS, and hover effect */}
                      <button className='btn btn-success join-button'>
                        <NavLink className="nav-link text-light" to={course.link} target="_blank">Join WhatsApp Group</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentClasses;
