import React from 'react';
const Footer = () => {
  return (

    <footer className="page-footer text-center text-white pt-3">

      <div className="col pb-3">

       <a href="https://www.facebook.com/" ><i className="fab fa-facebook-f btn btn-outline-dark btn-floating m-1"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter btn btn-outline-dark btn-floating m-1"></i></a>
        <a href="https://www.google.com/"><i className="fab fa-google btn btn-outline-dark btn-floating m-1"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram btn btn-outline-dark btn-floating m-1"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in btn btn-outline-dark btn-floating m-1"></i></a>
        <a href="https://github.com/"><i className="fab fa-github btn btn-outline-dark btn-floating m-1"></i></a>

      </div>


      <div className="footer-copyright text-center text-white fw-bold py-3 bg-dark"><p className="footer-copyright mb-0">
                &copy; {(new Date().getFullYear())} Copyright : getbootstrap.com
                </p>
      </div>

    </footer>


  );
};

export default Footer;