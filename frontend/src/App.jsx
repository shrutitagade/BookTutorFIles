import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import BecomeATutor from './User/Tutor/BecomeATutor';
import AboutTutor from './User/Tutor/AboutTutor';
import CreateClass from './User/Tutor/CreateClass';
import Profile from './User/Profile';
import JoinClassForm from './User/Student/JoinFreeClass';
import StudentClasses from './User/Student/StudentClasses';
import SettingsPage from './User/SettingsPage';
import HelpAndSupport from './User/HelpAndSupport';
import ShowStudentJoin from './User/Tutor/ShowStudentJoin';
import YourClasses from './User/Tutor/YourClasses';
import UserView from './User/UserView';
import TutorProfile from './User/Tutor/TutorProfile';
import StudentProfile from './User/Student/StudentProfile';


function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/class-list" element={<Home />} />
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<BecomeATutor />} path="/become-a-tutor"></Route>
          <Route element={<AboutTutor />} path="/about-tutor"></Route>
          <Route element={<CreateClass />} path="/create-course"></Route>
          <Route element={<Profile />} path="/profile"></Route>
          <Route element={<JoinClassForm />} path="/join-free-course"></Route>
          <Route element={<StudentClasses />} path="/show-join-course"></Route>
          <Route element={<SettingsPage />} path="/setting"></Route>
          <Route element={<HelpAndSupport />} path="/help-and-support"></Route>
          <Route element={<ShowStudentJoin />} path="/show-student-join"></Route>
          <Route element={<YourClasses />} path="/your-classes"></Route>
          <Route element={<UserView />} path="/user"></Route>
          <Route element={<Home />} path="/class-list/:id"></Route>
          <Route element={<TutorProfile />} path="/tutor-profile"></Route>
          <Route element={<StudentProfile />} path="/student-profile"></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App