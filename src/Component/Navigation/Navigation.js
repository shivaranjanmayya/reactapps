import { Navbar, Container, Nav, NavLink, Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react'

class Navigation extends Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
       

        this.state = {
            show: false,
            
        };
       
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
   
    render() {
        return (
            <Navbar className="bgcolor" expand="lg" sticky="top">
                <img src="https://logos-download.com/wp-content/uploads/2018/11/Fastrack_Logo.png" className="logo-image" />
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
                                        <i className="fas fa-store"></i>Products
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={this.handleShow}>
                                        <i className="fas fa-sign-in-alt"></i>Login
                                    </NavLink>
                                </li>

                            </ul>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Sign In</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <div className="form-group mb-3">
                                            <label className="mb-2">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label className="mb-2">Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        <div className="form-group mb-2">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label p-2" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary mb-3 w-50">Sign In</button>
                                        </div>
                                        <p className="forgot-password text-center mb-3">
                                            <a className="text-decoration-none" href="#">Forgot password?</a>
                                        </p>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                </Modal.Footer>
                                <div className="text-center">
                                    <Button className="text-decoration-none btn btn-success">Create an account</Button>
                                </div>
                                
                            </Modal>
                           

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}


export default Navigation;