import React, { useState } from 'react';
import './Login_light.css';
import { Container, Row, Col } from 'reactstrap';
import { Button, FormGroup, Input, FormText, NavLink } from 'reactstrap';



function LoginLight() {
  return (
    <Container fluid >
      <Row >
        <Col className="SideBar" xs="2"></Col>
        <Col className="AuthArea" xs="auto">{AuthArea()}</Col>
      </Row>
    </Container>
  );
}



function AuthArea() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [checkRemember, setCheckedRemember] = useState(false);

  async function LoginFunc() {
    console.log(checkRemember)
    console.log(username)
    console.log(password)
  }

  return (
    <div className="AuthArea">
      <p className="Header">
        Log In
      </p>
      <Col sm="25">
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" className="TextField" value={username} onInput={f => setusername(f.target.value)} />
      </Col>
      <Input type="password" name="password" id="examplePassword" placeholder="Password" className="TextField" value={password} onInput={f => setpassword(f.target.value)} />
      <FormGroup check>
        <Row >
          <Col sm="auto" >
            <Input type="checkbox" id="checkbox" className="CheckBox" onChange={f => setCheckedRemember(f.target.checked)} />{''}
            remember me
          </Col>
        </Row>
      </FormGroup>
      <Row>
        <Col sm="5" className="TextField">
          <Button color="primary" size="l" block onClick={LoginFunc}>Log In</Button>
        </Col>
      </Row>
      <FormGroup>
        <Col sm="left" >
          <NavLink href="#" className="ForgotPassword" >Forgot Password</NavLink>
        </Col>
      </FormGroup>
      <FormText color="muted">
        Contact Admin if unable to login.
        </FormText>
    </div>
  )
}



export default LoginLight;
