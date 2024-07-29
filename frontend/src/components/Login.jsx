import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    if (result.email && result.password) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("You haven't registered yet, please register");
      navigate("/register");
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
              <h2 className="card-title text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={collectData} className="btn btn-primary w-100">Submit</button>
              </form>
              <div className="text-center mt-3">
                <p>Don't have an account? <NavLink to="/register">Create an account</NavLink></p>
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

export default Login;
