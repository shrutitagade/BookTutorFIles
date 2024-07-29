import React from 'react'
import Navbar from '../../components/Navbar'
import AboutTutorPage from './AboutTutor'
import ShowStudentJoin from './ShowStudentJoin'
import YourClasses from './YourClasses'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'

function TutorProfile() {
    return (
        <>
        
            <Navbar />
            <br></br>
            <div className='container'>
                <div className="text-right"> {/* Align content to the right */}
                    <button className='btn btn-success create-class-btn'> {/* Styled Create Class button */}
                        <NavLink to="/create-course" className="nav-link" style={{ textDecoration: "none" }}>Create Course</NavLink>
                    </button>
                </div>
            </div>

            <YourClasses />
            <ShowStudentJoin />
            <AboutTutorPage />
<br></br>
<Footer />
        </>
    )
}

export default TutorProfile