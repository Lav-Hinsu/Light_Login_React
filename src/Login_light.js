import React, { useState } from 'react';
import { Button, Col, Container, FormGroup, FormText, Input, NavLink, Row } from 'reactstrap';
import FloatingLabelInput from 'react-floating-label-input';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import './Login_light.css';

function LoginLight() {


  var tempTime = new Date();
  var time = tempTime.getHours();

  var currentTheme;
  if (time > 19) {
    currentTheme = darkTheme
  }
  else if (time < 8) {
    currentTheme = darkTheme
  }
  else {
    currentTheme = lightTheme
  }


  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Container fluid >
        <Row >

          <Col className="SideBar" xs="2"></Col>
          <Col className="AuthArea" xs="auto">{AuthArea()}</Col>
        </Row>
      </Container>
    </ThemeProvider>
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
      <Col sm="25" style={{ fontSize: 20 }}>
        <FloatingLabelInput
          type="email"
          name="email"
          label="Email"
          id="exampleEmail"
          className="TextField"
          value={username}
          onInput={f => setusername(f.target.value)} />
      </Col>
      <Col sm="25" style={{ fontSize: 20 }}>
        <FloatingLabelInput
          type="password"
          name="password"
          id="examplePassword"
          label="Password"
          className="TextField"
          value={password}
          onInput={f => setpassword(f.target.value)} />
      </Col>
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
