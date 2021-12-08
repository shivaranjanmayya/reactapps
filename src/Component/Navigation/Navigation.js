import React from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';


const Navigation = () => {
    return (


        <Navbar bg="dark" variant="dark" expand="lg">
            <a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src="src\Images\slazzer-edit-image.png" class="img-fluid"/>
      </div>
</a>
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll" className="justify-content-end" >

                    <Nav className="ml-auto">
                        
                        <ul className="navbar-nav">
                            

                            <li className="nav-item">
                                <NavLink className="nav-link" href="/">
                                    <i className="fas fa-home"></i>Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" href="/AboutUs">
                                    <i className="fas fa-address-card"></i>About Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" href="/Products">
                                    <i
                                        className="far fa-clone">
                                    </i>Products
                                </NavLink>
                            </li>

                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;