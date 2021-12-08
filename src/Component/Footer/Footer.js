import React from 'react';
const Footer = () => {
  return (

    <footer className="page-footer text-center text-white bg-light pt-3">

      <div className="col pb-3">

        <i className="fab fa-facebook-f btn btn-outline-dark btn-floating m-1"></i>
        <i className="fab fa-twitter btn btn-outline-dark btn-floating m-1"></i>
        <i className="fab fa-google btn btn-outline-dark btn-floating m-1"></i>
        <i className="fab fa-instagram btn btn-outline-dark btn-floating m-1"></i>
        <i className="fab fa-linkedin-in btn btn-outline-dark btn-floating m-1"></i>
        <i className="fab fa-github btn btn-outline-dark btn-floating m-1"></i>

      </div>


      <div className="footer-copyright text-center text-white fw-bold py-3 bg-dark">© 2021 Copyright:
        <a className="text-decoration-none fw-normal" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>

    </footer>


  );
};

export default Footer;