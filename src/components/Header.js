import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props)=> {
    const search=false;
  return (
    

    <Navbar bg={props.mode?"dark":"light"} expand="lg" style={{position:"sticky",top:0}}>
      <Container fluid>
        <Navbar.Brand href="#" className={props.mode?"text-light":"text-dark"}>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={props.mode?"text-light":"text-dark"} href="#action1">Home</Nav.Link>
            <Nav.Link className={props.mode?"text-light":"text-dark"} href="#action2">About</Nav.Link>
           
            
          </Nav>
          <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Enable Dark Mode"
        className={props.mode?"text-light":"text-dark"}
        onChange={()=>{
          props.setMode(p=>!p)
        }}
      />
     
    </Form>
          {search?<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>:""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    
}

export default Header;

Header.prototype = {
    title:String
}
Header.defaultProps = {
    title:"add title here"
}