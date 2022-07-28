import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022 Music Lyrics Tracker</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
