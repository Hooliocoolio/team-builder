import React, { useState } from 'react';
import '../App.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';



const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  return (
    <div className="form-container">
        <Container className="form-container">
            <h2>Team Sign Up Form</h2>
            <Form>
                <Col>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                            <Input type="text" name="name" placeholder="Enter Name" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for ="email">Email:</Label>
                            <Input type="email" name="email" placeholder="Enter Email Address" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="exampleSelect">Role</Label>
                            <Input type="select" name="role">
                                <option>Web Designer</option>
                                <option>Front End Developer</option>
                                <option>UI/UX Designer</option>
                                <option>SEO Specialist</option>
                                <option>Back End Developer</option>
                            </Input>
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
    </div>
  );
}

export default SignUpForm;