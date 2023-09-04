import { Navbar, Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import '../NavBar/NavBar.css';

export default function NavBar() {
    return (
        <>
            <div className="NavBar">
                <Navbar bg="dark" data-bs-theme="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        </>
    );
}