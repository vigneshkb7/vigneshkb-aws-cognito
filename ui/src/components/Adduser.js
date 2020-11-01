import React, { useState } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Adduser = (props) => {
  const {
    buttonLabel,
      className,
    modal,toggle,handleSubmit
  } = props;
    

    const [user, setUser] = useState({
        email: '',
        password:''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submit = () =>{
        handleSubmit(user)
    }

 

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add User</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password   (length should be greater than 7)</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={handleChange} />
                      </FormGroup>
                      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submit}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Adduser;