import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Button, FormGroup, Label, Modal, ModalBody, ModalHeader, Input, Form } from 'reactstrap'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

function RegisterModal() {

  const [modal, setModal]= useState('false');
  
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const dispatch= useDispatch();

  const handleLogin=()=>{
    const newUser={email,password}
    dispatch(loginUser(newUser))

  }


  //toggle
  const toggle=()=>{
    setModal(!modal)
  }

  return (
    <div>
      <NavLink onClick={toggle} href='#'> Login </NavLink>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              

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
              onClick={handleLogin}
              > Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>

      </Modal>
    </div>
  )
}

export default RegisterModal