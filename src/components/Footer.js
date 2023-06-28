import React from "react";
import  "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
    <div className="footer-title">
        The Generics
    </div>
    <div className="footer-icons">
        <ul>
            <li><a href="https://www.youtube.com">
                <img src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"} alt=""/>
            </a></li>
            <li><a href="https://spotify.com">
                <img src={"https://cdn-icons-png.flaticon.com/128/49/49097.png"} alt=""/>
            </a></li>
            <li><a href="https://facebook.com">
                <img src={"https://cdn-icons-png.flaticon.com/128/4494/4494475.png"} alt=""/>
            </a></li>
        </ul>
    </div>
</footer>
  );
};

export default Footer;
