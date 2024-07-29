import React, { useEffect, useState } from 'react';

function ShowStudentJoin() {
  const [students, setStudents] = useState([]);
  let tutor = localStorage.getItem('tutor');
  tutor = JSON.parse(tutor);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course list data
        const tutorResponse = await fetch("http://localhost:8080/class-list");
        const tutorData = await tutorResponse.json();
        
        // Fetch students data
        const studentResponse = await fetch("http://localhost:8080/students");
        const studentData = await studentResponse.json();
        
        // Filter students based on tutorData course names
        let resp = studentData.filter(student => {
          return tutorData.some(tutor => tutor.courseName === student.courseName);
        });

        // Update state with the filtered students
        setStudents(resp);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here, e.g., set error state or display error message
      }
    };

    fetchData();
  }, []);

  // Conditional rendering based on whether students data is available
  if (!students || students.length === 0) {
    // Return nothing if students data is not available or empty
    return null;
  }

  // Render the students data if available
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Students Enrolled in Courses Offered</h2>
        <div className="row">
          {students.map(student => (
            <div className="col-md-4 mb-4" key={student._id}>
              {tutor && tutor.userId === student.userId && (
                <div className="card" style={{border:"2px solid rgb(58, 58, 97)"}}>
                  <div className="card-header text-white" style={{backgroundColor:"rgb(58, 58, 97)"}}>
                    <h6 className="card-title mb-0">Name: {student.name}</h6>
                  </div>
                  <div className="card-body" style={{fontWeight:"500"}}>
                    <p className="card-text" ><strong>Email: </strong> {student.email}</p>
                    <p className="card-text"><strong>Course Name: </strong> {student.courseName}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowStudentJoin;
