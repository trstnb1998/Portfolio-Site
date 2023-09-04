import { Navbar, Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import '../NavBar/NavBar.css';

export default function NavBar() {
    return (
        <>
            <div className="NavBar">
                <Navbar bg="dark" data-bs-theme="dark">
                       
                        <Nav className="NavLinks">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link href="#resume">RESUME</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        </>
    );
}