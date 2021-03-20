import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import web3 from "./web3";
import netMetering from "./netMetering";

export default function RegisterGrid() {
  //Name
  let name, state, nPasswd, cPasswd, passwd;
  const updateName = (e) => {
    name = e.target.value;
  }

  //State
  const updateState = (e) =>{
    state = e.target.value;
  }
  //password
  
  const updateNPasswd = (e) =>{
    nPasswd = e.target.value;
  };

  const updateCPasswd = (e) =>{
    cPasswd = e.target.value;
  };

  const updatePasswd = () =>{
    if (nPasswd === cPasswd)
    {
      passwd = nPasswd;
      return true;
    }
    else{
      alert("The passwords dont match!!");
      return false;
    }
  };

  const submit = async(e) =>{
    e.preventDefault();
    if(! updatePasswd())
    {
      console.log("passwords dont match!!!");
      return ;
    }
    await web3.eth.getAccounts().then((address)=>{
      console.log(address[0]);
      return address[0]
    }).then(async(walletId)=>{
      const res = await netMetering.methods.addCompany(walletId, name, state, passwd).send({
        from: walletId,
        gas:6721975
      });
      console.log(res);
      alert("Successfull!!!");
    })
  };

    return (
      <RegisterPage>
        <Link to='/'><LoginButton>Login</LoginButton></Link>
            <Tab>
            <Link to='/Sign-up'><UnactiveTab>User</UnactiveTab></Link>
            <ActiveTab>Grid-Company</ActiveTab>
            </Tab>
            
            <H1>Company</H1>
            <Form>
                <Label>Company Name: </Label>
                <Text type="Text" onChange={updateName} required/>
                <br/>

                <Label>State: </Label>
                <Text type="Text" onChange={updateState} required/>
                <br/>

                <Label>New Password: </Label>
                <Text type="Password" onChange={updateNPasswd} required/>
                <br/>

                <Label>Confirm Password: </Label>
                <Text type="Password" onChange={updateCPasswd} required/>
                <br/>

                <Button onClick={submit}>Signup</Button>
            </Form>
      </RegisterPage>
    );
  }
  const LoginButton = styled.button`
  height: 48px;
  width: 128px;
  outline: none;
  border-radius: 5px;
  border: none;
  background-color:rgb(253, 200, 48);
  font-size: 20px;
  &:hover{
      cursor: pointer;
      transform: translate(0px, -2px)
  }
  &:active{
      background:rgb(243, 115, 53);
      transform: translate(0px, 2px)
  }
  position: absolute;
  right: 10px;
  top: 5px;
`;
  const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ActiveTab = styled.button`
    height: 48px;
    width: 128px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color:rgb(253, 200, 48);
    font-size: 20px;
  `;
  const UnactiveTab = styled.button`
    height: 48px;
    width: 128px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color:rgb(243, 115, 53);
    font-size: 20px;
    &:hover{
        cursor: pointer;
        transform: translate(0px, -2px)
    }
    &:active{
        background:rgb(253, 200, 48);
        transform: translate(0px, 2px)
    }
  `
  const RegisterPage = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  align-content: space-around;
  background:linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53)); 
  width: 100%; 
  height: 100%; 
  background-size : cover;
  padding:10px; 
   `;
 const Form = styled.form`
     padding: 10px;
 `;
 const Text = styled.input`
     border:none;
     height: 32px;
     width: 256px;
     border-radius: 8px;
     font-size: 20px;
     background: #efefef;
     color: #303030;
     font-weight: 600;
     padding: 4px;
     padding-left: 16px;
     outline: none;
     &:focus{
         border:5px;
         border-color:#00b7ff;
     }
 `;
 const H1 = styled.h1`
 font-size: 50px;
 font-weight: 700px;
`;
const Label = styled.label`
 font-size: 24px;
 font-weight: 600px;
 padding:10px;
 padding-top: 10px;
 padding-bottom: 10px;
`;
const Button = styled.button`
    height: 48px;
    width: 128px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color:rgb(243, 115, 53);
    font-size: 20px;
    &:hover{
        cursor: pointer;
        transform: translate(0px, -2px)
    }
    &:active{
        background:rgb(253, 200, 48);
        transform: translate(0px, 2px)
    }
`;