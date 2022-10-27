import React from "react";
import  "./footer.css";

function Footer() {
    
  return (
    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>Groupomania</h2>
          <a href="#">Qui sommes-nous ?</a>
          <a href="#">Presse</a>
          <a href="#">Forum</a>
          <a href="#">Nous rejoindre</a>
        </div>
        <div className="column">
          <h2>Contactez-nous</h2>
          <a href="#">example@mail.fr</a>
          <a href="#">+33 123 456 7</a>
          <a href="#">12 rue Chanzy Paris 75012</a>
          
        </div>
        <div className="column">
          <h2>En plus</h2>
          <a href="#">Mentions légales</a>
          <a href="#">Conditions générales d'utilisation</a>
          <a href="#">Politique de protection des données personnelles</a>
          
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