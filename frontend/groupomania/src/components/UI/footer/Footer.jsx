import React from "react";
import  "./footer.css";

function Footer() {
    
  return (
    <div className="footer">
    <h1 style={{ color: '#FD2D01', 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      Groupomania
    </h1>
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>About Us</h2>
          <a href="#">Aim</a>
          <a href="#">Vision</a>
          <a href="#">Testimonials</a>
        </div>
        <div className="column">
          <h2>Services</h2>
          <a href="#">Writing</a>
          <a href="#">Internships</a>
          <a href="#">Coding</a>
          <a href="#">Teaching</a>
        </div>
        <div className="column">
          <h2>Contact Us</h2>
          <a href="#">Uttar Pradesh</a>
          <a href="#">Ahemdabad</a>
          <a href="#">Indore</a>
          <a href="#">Mumbai</a>
        </div>
        <div className="column">
            <h2>Social Media</h2>
            <a href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                  </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer;