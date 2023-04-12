import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Button, FormGroup, Label, Modal, ModalBody, ModalHeader, Input, Form } from 'reactstrap'
import { registerUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

function RegisterModal() {

  const [modal, setModal]= useState('false');
  const [name, setName]= useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const dispatch= useDispatch();

  const handleRegister=()=>{
    const newUser={name, lastName, email,password}
    dispatch(registerUser(newUser))

  }


  //toggle
  const toggle=()=>{
    setModal(!modal)
  }

  return (
    <div>
      <NavLink onClick={toggle} href='#'> Register </NavLink>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>
          Register
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
              type="text"
              name="name"
              className="mb-3"
              onChange={(e)=>setName(e.target.value)}/>

             <Label>lastName</Label>
              <Input
              type="text"
              lastName="lastName"
              className="mb-3"
              onChange={(e)=>setLastName(e.target.value)}/>

              <Label>email</Label>
              <Input
              type="email"
              email="email"
              className="mb-3"
              onChange={(e)=>setEmail(e.target.value)}/>

              <Label>password</Label>
              <Input
              type="password"
              password="password"
              className="mb-3"
              onChange={(e)=>setPassword(e.target.value)}/>

              <Button
              color='dark'
              onClick={handleRegister}
              > Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>

      </Modal>
    </div>
  )
}

export default RegisterModal