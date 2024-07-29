import React, { useState, useEffect } from 'react';
import BookClass from '../User/Student/BookClass';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
// const CourseContext = React.createContext();
function Home() {
    const MyContext = React.createContext(5);
    const [classList, setClassList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    const [detail, setDetail] = useState([]);
    if(!classList)
    {
        navigate("/")
    }
    const ShowDetail = (productId) => {
        const product = classList.find(item => item._id === productId);
        setDetail([product]);
    };

    const navigate = useNavigate();
    const auth = localStorage.getItem('user');


    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        let result = await fetch("http://localhost:8080/class-list");
        result = await result.json();
        setClassList(result);
    };

    const submit = localStorage.getItem('submit');
    const student = localStorage.getItem('student');

    const fetchTutor = async (tutorId) => {
        const response = await fetch(`http://localhost:8080/show-tutor/${tutorId}`);
        const tutorInfo = await response.json();
        if (tutorInfo) {
            const joinedCourses = JSON.parse(localStorage.getItem('joinedCourses')) || [];

            const alreadyJoined = joinedCourses.some(course => course._id === tutorInfo._id);
            if (alreadyJoined && student) {
                alert("You have already registered for this course.");
            } else {
                joinedCourses.push(tutorInfo);
                localStorage.setItem("joinedCourses", JSON.stringify(joinedCourses));
                let data = localStorage.getItem('joinedCourses');
                console.log(data)
                if (!auth) {
                    alert("You are not logged in yet, please login first");
                    navigate('/login');
                }
                if (auth || submit === 'true') {

                    navigate('/join-free-course');
                }
                // if (submit === 'true') {
                //     navigate('/join-free-course');
                //     // Increase count when student joins successfully
                //     alert("Course Joined Successfully");
                //     navigate('/profile');
                //     return;
                // }
            }
        }
    };

    const isAlreadyJoined = (courseId) => {
        const joinedCourses = JSON.parse(localStorage.getItem('joinedCourses')) || [];
        return joinedCourses.some(course => course._id === courseId);
    };

    const fetchStudent = async (studentId) => {
        const response = await fetch(`http://localhost:8080/show-student/${studentId}`);
        const studentInfo = await response.json();
        console.log(studentInfo);
    };
    const fetchId = async (studentId) => {
        const response = await fetch(`http://localhost:8080/show-student/${studentId}`);
        const studentInfo = await response.json();
        return studentInfo._id;
    };

    // Function to filter class list based on search term
    const filteredClassList = classList.filter(item =>
        item.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const changeData = () => {
        // Remove user info from localStorage
        localStorage.removeItem('user');

        navigate("/login");
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const extractVideoIdFromUrl = (url) => {
        if (!url) return null;
        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };
    const isStudent = localStorage.getItem('student');
    const isTutor = localStorage.getItem('tutor');
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light">
                {
                    auth ?
                        <>
                            <NavLink className="navbar-brand" to="#" id="title">LearnEase</NavLink>&nbsp;
                            <NavLink className="navbar-brand text-light nav-link" to="/class-list" >Courses</NavLink>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input style={{ width: "500px" }} className="form-control mr-sm-2" type="search" placeholder="Search Courses" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                                        <button className="btn" id="search" type="submit">Search</button>
                                    </form>
                                </li>
                            </ul>
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
                                        <NavLink style={{ backgroundColor: "rgb(58, 58, 97)" }} className="dropdown-item text-light" onClick={changeData} to=" ">Logout</NavLink>
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
            <br />
            <div className="modal" style={{ display: detail.length > 0 ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-light">
                            <h5 className="modal-title">{detail[0]?.courseName}</h5>
                            <button
  type="button"
  className="close"
  style={{
    padding: "3px 6px", // Adjust padding for better appearance
    backgroundColor: "white", 
    borderRadius:"2px",// Dark gray background color
   marginRight:"10px" ,// Rounded corners
    border: "none", // Remove border
    cursor: "pointer",
    border:"1px solid red"// Change cursor to pointer on hover
  }}
  onClick={() => setDetail([])}
>
  <span aria-hidden="true" style={{ color: "red" }}>
    &times;
  </span>
</button>

                        </div>
                        <div className="modal-body">

                            <div>
                                <img className="card-img" style={{ height: "300px", width: "100%" }} src={`http://localhost:8080/${detail[0]?.imageUrl}`} alt="Course" />
                            </div>
<br></br>
                            <p><strong>Tutor Name:</strong> {detail[0]?.tutorName}</p>
                            <p><strong>Duration:</strong> {detail[0]?.duration}</p>
                            <p><strong>Price:</strong> {detail[0]?.price}</p>
                            <p><strong>Education:</strong> {detail[0]?.education}</p>
                            <p><strong>Specialization:</strong> {detail[0]?.specialization}</p>
                            <p><strong>About:</strong> {detail[0]?.about}</p>
                        </div>

                        <h5>Videos : </h5>
                        {detail[0]?.videos && (
                            <div className="video-container mt-3">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${extractVideoIdFromUrl(detail[0].videos)}`}
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


            {/* <CourseContext.Provider value={{ fetchTutor, isAlreadyJoined, fetchStudent }}> */}
            <div className='container'>
                <div className='row'>

                    {filteredClassList.map((item, index) => (
                        <div className='col-md-4' key={index}>

                            <div className="card" style={{border:"1px solid rgb(58, 58, 97)",height:"420px"}}>

                                <NavLink >   <img onClick={() => ShowDetail(item._id)} className="card-img" width="100%" height="150" src={`http://localhost:8080/${item?.imageUrl}`} alt="Card image cap" />
                                </NavLink>
                                <div className="card-body">
                                    <h5 className="card-title">{item.courseName}</h5>
                                    <p className="card-text">{item.tutorName}</p>
                                    <p>Duration :  {item.duration}</p>
                                    <p>Price : {item.price}</p>
                                    <div className="text-center">
                                        {item.price === 0 ? (
                                            isAlreadyJoined(item._id) && student ? (
                                                <button className='btn btn-success' onClick={() => fetchStudent(JSON.parse(student)._id)}>
                                                    Already Joined
                                                </button>
                                            ) : (
                                                <button className='btn btn-success' onClick={() => fetchTutor(item._id)}>
                                                    Join free Class
                                                </button>
                                            )
                                        ) : (
                                            <BookClass />
                                        )}
                                    </div>

                                    {/* {auth && JSON.parse(auth)._id === item.userId && (
                                        <button className='btn btn-danger' onClick={() => { deleteClass(item._id) }}>Delete Class</button>
                                    )} */}
                                </div>
                            </div>
                            <br />

                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <Footer />
            {/* </CourseContext.Provider> */}
        </>

    );
}

export default Home;
