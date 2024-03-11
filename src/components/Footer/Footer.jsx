import React from "react";
import "./footer.css";
import logo from "../../media/logo.png";
import SocialLinks from "../Navbar/SocialLinks";
import { Link } from "react-router-dom";
export default function Footer() {
  const alphabets = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  const links = alphabets.map((el) => (
    <Link
      to={`/search?name=${el}&parameter=letter`}
      key={el}
      className="alphabet-tile"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      {el}
    </Link>
  ));

  return (
    <div className="footer-container d-flex-fd-column j-center">
      <div className="logo-social-links d-flex">
        <Link
          className="main-element"
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <img src={logo} className="logo" />
        </Link>
        <SocialLinks />
      </div>
      <div className="help-text d-flex">
        <h2 className="main-element">A-Z List</h2>
        <span>Searching anime order by alphabet name A to Z.</span>
      </div>
      <div className="alphabet-list d-flex">{links}</div>
      <div className="copyright-text">
        <p>
          <strong><a href="#">AnimXer</a></strong> Stream for free without ads! Please Support Me On Facebook Page  <a
          target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100069572806122">ANIMXER</a>. .
        </p>
        <p>&copy; {new Date().getFullYear()} AnimXer All rights reserved.</p>
      </div>
    </div>
  );
}

