import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="foo">
            <div className="foo-inner">

            <div class="footer-container">
          <p>Lives in Karachi, Pakistan. Available worldwide.</p>

          

        {/* <!-- ROW --> */}
          <div className="footer-icons">
            <a href="https://www.instagram.com/osama_ameer_/"> <div className="sidebar-icon"><i class="fab fa-instagram"></i></div> </a>
            <a href="https://github.com/osama-ameer"> <div className="sidebar-icon"><i class="fab fa-github"></i></div> </a>

            <a href="https://www.facebook.com/osama.ameer.14/"> <div className="sidebar-icon"><i class="fab fa-facebook-square"></i></div> </a>
            <a href="https://www.linkedin.com/in/osama-ameer-50b80719b/"> <div className="sidebar-icon"><i class="fab fa-linkedin"></i></div> </a>
          </div>

          {/* <!-- ROW --> */}
          <div className="footer-info">
            <div className="footer-year">© Osama Ameer <span className="footer-year-num">2021</span> | PK +92 331 3368330</div>
            <div className="footer-sitedeveloper">
              <p>Web Developer</p>
            </div>
          </div>

        </div>

            </div>
            
        </div>
    )
}
