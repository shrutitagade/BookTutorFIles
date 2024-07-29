import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HelpAndSupport = () => {
  return (
    <>
      <Navbar />
      <div className="help-and-support container">
        <h1 className="text-primary">Help and Support</h1>
        <p className="lead">Welcome to Learn Ease! We're here to ensure your learning experience is smooth and enjoyable. If you have any questions or encounter any issues, you'll likely find the answers here.</p>

        <div className="faq-section">
          <h2 className="text-info">Frequently Asked Questions (FAQs)</h2>
          <ol>
            <li>
              <strong>How do I get started on Learn Ease?</strong>
              <p>To begin learning on Learn Ease, simply sign up for an account and explore our range of courses. You can browse by category, search for specific topics, or explore recommended courses based on your interests.</p>
            </li>
            <li>
              <strong>How do I enroll in a course?</strong>
              <p>Once you've found a course you're interested in, click on the course title to view more details. From there, click the "Enroll Now" button to join the course. If it's a paid course, you'll be prompted to complete the payment process.</p>
            </li>
            <li>
              <strong>What if I forget my password?</strong>
              <p>If you forget your password, don't worry! You can easily reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions provided to reset your password and regain access to your account.</p>
            </li>
            <li>
              <strong>How do I access my enrolled courses?</strong>
              <p>After enrolling in a course, you can access it anytime by logging into your Learn Ease account and navigating to your dashboard. From there, you'll see a list of your enrolled courses, and you can click on any course to start learning.</p>
            </li>
            <li>
              <strong>What if I encounter technical issues while using Learn Ease?</strong>
              <p>If you experience any technical issues while using Learn Ease, please check our Troubleshooting section below. If you're unable to find a solution, don't hesitate to contact our support team for assistance.</p>
            </li>
          </ol>
        </div>

        <div className="troubleshooting-section">
          <h2 className="text-danger">Troubleshooting</h2>
          <ol>
            <li>
              <strong>Video Playback Issues</strong>
              <p>If you're experiencing issues with video playback, try the following troubleshooting steps:
                <ul>
                  <li>Check your internet connection.</li>
                  <li>Clear your browser cache and cookies.</li>
                  <li>Try using a different browser or device.</li>
                </ul>
              If the issue persists, please contact our support team for further assistance.</p>
            </li>
            <li>
              <strong>Account Access Problems</strong>
              <p>If you're having trouble accessing your Learn Ease account, try the following:
                <ul>
                  <li>Double-check your username and password.</li>
                  <li>Reset your password if you've forgotten it.</li>
                  <li>Ensure there are no typos in your login credentials.</li>
                </ul>
              If you still can't access your account, please reach out to our support team for help.</p>
            </li>
          </ol>
        </div>

        <div className="contact-us-section">
          <h2 className="text-success">Contact Us</h2>
          <p>Still have questions or need assistance? Our support team is here to help! You can reach us via email at <a href="mailto:support@learnease.com">support@learnease.com</a> or through our <a href="/contact">contact form</a>. We strive to respond to all inquiries promptly and provide the assistance you need.</p>
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default HelpAndSupport;
