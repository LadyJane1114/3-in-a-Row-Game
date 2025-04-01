import { Link } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"
// THE MENU
const TopNav = () => {
  return (
    <>
        <Navbar bg="warning" data-bs-theme="dark">
            <Container>
                {/* <Navbar.Brand as={Link} to="/">Three In a Row</Navbar.Brand> */}
                <Navbar.Brand>Three In a Row</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/sample">Sample</Nav.Link>
                    <Nav.Link as={Link} to="/random">Random</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
  )
}

export default TopNav