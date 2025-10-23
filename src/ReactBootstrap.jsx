import { Button } from "react-bootstrap";
import { Alert, Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

function ReactBootstrap(){
    return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <h1>Add Bootstrap in react</h1>
        <Button>OK</Button>
        <Alert variant="danger">Hello</Alert>
        <Alert variant="Success">Success</Alert>

      <Button onClick={()=>alert("Primary Button")} variant="primary">Primary</Button>
      <Button onClick={()=>alert("Secondary Button")} variant="secondary">Secondary</Button>
      <Button onClick={()=>alert("Success Button")} variant="success">Success</Button>
      <Button onClick={()=>alert("Warning Button")} variant="warning">Warning</Button>
    </>

    )
}
export default ReactBootstrap