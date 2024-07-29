import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 text-white" style={{ backgroundColor: "rgb(58, 58, 97)" }}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h5 className="mb-3">Connect with Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <NavLink to="https://github.com/shrutitagade" className="text-white">
                                    <i className="fa-brands fa-github" style={{ fontSize: "24px" }}></i>
                                </NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="https://www.linkedin.com/in/shruti-tagade-4a6668253/" className="text-white">
                                    <i className="fa-brands fa-linkedin" style={{ fontSize: "24px" }}></i>
                                </NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="https://instagram.com/tagadeshruti?igshid=ZDdkNTZiNTM=" className="text-white">
                                    <i className="fa-brands fa-square-instagram" style={{ fontSize: "24px" }}></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-2">
                <p className="mb-0">© 2024 LearnEase. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
