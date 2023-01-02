import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
function About() {
  const [dark,setDark] = useState(true)
  const [mode, setmode] = useState(true)
  useEffect(()=>{
    document.body.classList.toggle("darkTheme")
    setmode(()=>!mode)
  
  },[dark])
  return (
    <>

    <div className="container my-3">
    <h2 className='my-3'>About Us</h2>
    <Accordion defaultActiveKey="0" className="darkTheme">
      <Accordion.Item eventKey="0" >
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body className='darkTheme'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body className="darkTheme">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className="container">
       
       


    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={mode?"Enable Light Mode":"Enable Dark Mode"}
        onChange={()=>{
          setDark(!dark);
        }}
      />
     
    </Form>

    </div>
    </>
  );
}

export default About;