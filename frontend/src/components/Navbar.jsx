import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  let auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const changeData = () => {
    navigate("/login");
    // Remove user info from localStorage
    localStorage.removeItem('user');

    
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const isStudent = localStorage.getItem('student');
  const isTutor = localStorage.getItem('tutor');
  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      {
        auth ?
          <>
            <NavLink className="navbar-brand" to="#" id="title">LearnEase</NavLink>&nbsp;
            <NavLink className="navbar-brand text-light nav-link" to="/class-list" >Courses</NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className={"collapse navbar-collapse" + (isDropdownOpen ? " show" : "")} id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <form className="form-inline my-2 my-lg-0">
                    <input style={{ width: "500px" }} className="form-control mr-sm-2" type="search" placeholder="Search Courses" aria-label="Search" />
                    <button className="btn" id="search" type="submit">Search</button>
                  </form>
                </li>
              </ul>
            </div> */}
            <ul className="navbar-nav ml-auto" style={{ marginRight: "30px" }}> {/* Align to the right */}
              <li className="nav-item"></li>
              <li className={"nav-item dropdown" + (isDropdownOpen ? " show" : "")}>
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" id="navbarDropdown" onClick={toggleDropdown}>
                  <i className="fa-solid fa-user"></i>
                </a>
                <div style={{ backgroundColor: "rgb(58, 58, 97)", border: "2px solid purple", display: isDropdownOpen ? 'block' : 'none' }} className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item text-light" style={{ backgroundColor: "rgb(58, 58, 97)" }} to="/profile">Profile</NavLink>
                  <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/become-a-tutor">Become a Tutor</NavLink>
                  {
                    isStudent &&
                    <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/student-profile">Student Profile</NavLink>

                  }
                  {
                    isTutor &&
                    (
                      <>
                        <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/tutor-profile">Tutor Profile</NavLink>
                        <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/create-course">Create Course</NavLink>

                      </>
                    )

                  }
                  <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/help-and-support">Help and Support</NavLink>
                  <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" to="/setting">Settings</NavLink>
                  <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" onClick={changeData} to="#">Logout</NavLink>
                </div>
              </li>
            </ul>
          </>
          :
          <>
            <NavLink className="navbar-brand" to="#" id="title">LearnEase</NavLink>

            <ul className="navbar-nav ml-auto"> {/* Align to the right */}
              <li className="nav-item"><NavLink to="/login" className="nav-link text-light" style={{ marginRight: "10px" }}>Login</NavLink></li>
              <li className="nav-item"><NavLink to="/register" className="nav-link text-light">Register</NavLink></li>
            </ul>
          </>
      }
    </nav>
  );
}

export default Navbar;
