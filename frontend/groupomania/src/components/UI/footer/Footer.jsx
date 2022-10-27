import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import  "./footer.css";

function Footer() {
    
  return (
    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>Groupomania</h2>
          <Link to="/about" className="link">Qui sommes-nous ?</Link>
          <Link to="/about" className="link">Presse</Link>
          <Link to="/about" className="link">Forum</Link>
          <Link to="/about" className="link">Nous rejoindre</Link>
        </div>
        <div className="column">
          <h2>Contactez-nous</h2>
          <Link to="/about" className="link">example@mail.fr</Link>
          <Link to="/about" className="link">+33 123 456 7</Link>
          <Link to="/about" className="link">12 rue Chanzy Paris 75012</Link>
          
        </div>
        <div className="column">
          <h2>En plus</h2>
          <Link to="/about" className="link">Mentions légales</Link>
          <Link to="/about" className="link">Conditions générales d'utilisation</Link>
          <Link to="/about" className="link">Politique de protection des données personnelles</Link>
          
        </div>
        <div className="column">
            <h2>Social Media</h2>
            <Link to="/about" className="link">
            <FacebookOutlinedIcon sx={{ fontSize: 20 }}/>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              
            </Link>
            <Link to="/about" className="link">
              <InstagramIcon sx={{ fontSize: 20 }}/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              
            </Link>
            <Link to="/about" className="link">
              <TwitterIcon sx={{ fontSize: 20 }}/>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              
            </Link>
            <Link to="/about" className="link">
              <YouTubeIcon sx={{ fontSize: 20 }}/>
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                  </span>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer;

