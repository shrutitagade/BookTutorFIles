import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Register() {
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify({ fullname, mobile, email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (result.ok) {
      navigate("/login");
      alert("Registration successful");
    }
  }

  return (
    <>
    <Navbar />
    <div className="container">
      
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullname" placeholder="Enter full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <small className="text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={collectData}>Submit</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <Footer />
    </>
  );
}

export default Register;
