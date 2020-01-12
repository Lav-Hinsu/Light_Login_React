import React from 'react';
import './Login_light.css';
import { Container, Row, Col } from 'reactstrap';
import { Button, FormGroup, Input, FormText, NavLink } from 'reactstrap';



function LoginLight() {
  return (
    <Container fluid >
      <Row >
        <Col className="SideBar" xs="2"></Col>
        <Col className="AuthArea" xs="4">{AuthArea()}</Col>
      </Row>
    </Container>
  );
}

function AuthArea() {
  return (
    <div className="AuthArea">
      <p className="Header">
        Log in
      </p>
       
          <Col sm="25">
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" className="TextField" />
          </Col>

      
          <Input type="password" name="password" id="examplePassword" placeholder="Password" className="TextField" />

        <FormGroup check>
          
            <Row >
              <Col sm="auto" >
                <Input type="checkbox" className="CheckBox" />{' '}
                remember me
              </Col>
            </Row>
     
        </FormGroup>
        <Row>
          <Col sm="5" className="TextField">
            <Button color="primary" size="l" block>Log In</Button>
          </Col>
        </Row>
        <Col sm="left" >
          <NavLink href="#" className="ForgotPassword" block>Forgot Password</NavLink>
        </Col>
        <FormText color="muted">
          Contact Admin if unable to login.
        </FormText>
     

    </div>
  )
}

export default LoginLight;
