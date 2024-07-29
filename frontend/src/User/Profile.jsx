import React from 'react';
import AboutTutorPage from './Tutor/AboutTutor';
import StudentClasses from './Student/StudentClasses';
import ShowStudentJoin from './Tutor/ShowStudentJoin';
import YourClasses from './Tutor/YourClasses';
import UserView from './UserView';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Profile() {
    const auth = localStorage.getItem('user');
    const isTutor = localStorage.getItem('student');
    const tutorInfo = localStorage.getItem('joinedCourses');
    const createClass = localStorage.getItem('createClass')

    return (
        <>
            <Navbar />
            <UserView />

            {/* <AboutTutorPage />
            <ShowStudentJoin />
            <StudentClasses />
            <YourClasses /> */}
            <div className="footer py-3 text-white" style={{ backgroundColor: "rgb(58, 58, 97)", position: "absolute", bottom: "0", width: "100%" }}>
                <Footer />

            </div>


        </>
    );
}

export default Profile;
