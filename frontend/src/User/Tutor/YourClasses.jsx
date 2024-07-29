import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function YourClasses() {
    const [classList, setClassList] = useState([]);
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let result = await fetch("http://localhost:8080/class-list");
        result = await result.json();
        
        // Filter classList based on whether the authenticated user is the tutor
        const filteredList = result.filter(item => auth && item.userId === auth._id);
        setClassList(filteredList);
    };

    const deleteClass = async (id) => {
        let msg = "Are you sure you want to delete the class?";
        if (window.confirm(msg)) {
            let result = await fetch(`http://localhost:8080/delete/${id}`, {
                method: "delete"
            });
            result = await result.json();
            if (result) {
                getData();
                console.log("Class deleted successfully");
            }
        } else {
            console.log("No Class deleted");
        }
    };

    // Conditional rendering based on whether classList is empty
    if (classList.length === 0) {
        // Return null if classList is empty
        return null;
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Your Courses</h1>
                <div className='row'>
                    {classList.map((item, index) => (
                        <div className='col-md-4' key={index}>
                            <div className="card shadow-sm mb-4 custom-card" style={{border:"1px solid rgb(58, 58, 97)"}}>
                                <img className="card-img-top" src={`http://localhost:8080/${item?.imageUrl}`} alt="Class thumbnail" style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.courseName}</h5>
                                    <p className="card-text">{item.duration}</p>
                                    <p className="card-text">Price: {item.price}</p>
                                    {auth && auth._id === item.userId && (
                                        <button className='btn btn-danger btn-sm' onClick={() => { deleteClass(item._id) }}>Delete Class</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default YourClasses;
