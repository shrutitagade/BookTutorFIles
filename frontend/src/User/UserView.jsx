import React from 'react';
import Navbar from '../components/Navbar';

function UserView() {
    const auth = JSON.parse(localStorage.getItem('user'));

    return (
        <>
        {/* <Navbar /> */}
        <div className="container mt-5">
            <div className="card border-primary">
                <div className="card-body">
                    <h2 className="card-title text-primary">Welcome, {auth.fullname}</h2>
                    <p className="card-text">Mobile: {auth.mobile}</p>
                    <p className="card-text">Email: {auth.email}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default UserView;
