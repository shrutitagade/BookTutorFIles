import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SettingsPage = () => {
  // Define state variables for user preferences/settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  // Function to handle changes in email notification preferences
  const handleEmailNotificationChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  // Function to handle changes in dark mode preferences
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode by adding or removing 'dark-mode' class from the body
    document.body.classList.toggle('dark-mode');
  };

  // Function to handle changes in language preferences
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-4">Settings</h1>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailNotificationChange}
            id="emailNotificationsSwitch"
          />
          <label className="form-check-label" htmlFor="emailNotificationsSwitch">
            Email Notifications
          </label>
        </div>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
            id="darkModeSwitch"
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Dark Mode
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="languageSelect" className="form-label">Language</label>
          <select
            className="form-select"
            value={language}
            onChange={handleLanguageChange}
            id="languageSelect"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more language options as needed */}
          </select>
        </div>

        {/* Additional Settings Options */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={true} // Example: Always checked
            disabled
          />
          <label className="form-check-label" htmlFor="disabledField">
            Disabled Option
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="rangeInput" className="form-label">Range Input</label>
          <input
            type="range"
            className="form-range"
            id="rangeInput"
            min="0"
            max="100"
            step="5"
          />
        </div>

        <button className="btn btn-primary">Save Changes</button>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default SettingsPage;
