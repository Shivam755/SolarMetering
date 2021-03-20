import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import web3 from "./web3";
import bee from './swarm';
// import ipfs from './ipfs';
import netMetering from "./netMetering";
// import app from './corsHandle';

export default function RegisterUser() {

  //A function to add file to ipfs and return the has
  const addFile = async() =>{
    const files = await bee.uploadData(buffer);
    return files[0].hash
  }

  //Function to handle the file uploaded
  const captureFile = (e) =>{
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => convertToBuffer(reader)
  } ;
  

    let name, phone, state, email, nPasswd, cPasswd, passwd, read, hash='The proof hash';
    //Setname
    const updateName = (e) =>{
      name = e.target.value;
    };

    //Set phone number
    const updatePhone = (e) =>{
      phone = e.target.value;
    };

    //set State
    const updateState = (e) =>{
      state = e.target.value;
    };

    //set Email
    const updateEmail = (e) =>{
      email = e.target.value;
    };

    //password
    const updateNPasswd = (e) =>{
      nPasswd = e.target.value;
    };

    const updateCPasswd = (e) =>{
      cPasswd = e.target.value;
    };

    const updatePasswd = () =>{
      if (nPasswd === ''){
        alert("Please enter a password!!")
      }
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

    // Current reading
    const updateRead = (e) =>{
      read = e.target.value;
    };
   
    //A function to convert to buffer
    let buffer;
    const convertToBuffer= async (reader)=>{
        buffer = await Buffer.from(reader.result);
        
    };

    const submit = async (e) =>{
      e.preventDefault()
      // Verify password matching
      if(! updatePasswd())
      {
        console.log("passwords dont match!!!");
        return ;
      }
      let compID = '0xF877DBDD86303EC5B3769898B8FBbA2CC16b9003'
      //Sending the file to ipfs
      // app.post('/', async(req, res)=>{
      //   const data = req.body;
      //   console.log(data);
      //   const files = await addFile()
      //   console.log(res.send(`https://gateway.ipfs.io/ipfs/${files}`))
      // })

      const files = await addFile();
      console.log(files);
      //Sending data to smart Contract
      await web3.eth.getAccounts().then((address)=>{
        return address[0]
      }).then(async(walletId)=>{
        const res = await netMetering.methods.addUser(walletId, name, phone, state, compID, passwd, email, hash, read).send({
          from: walletId,
          gas:6721975
        });
        alert("Successfull!!!");
        return res;
      })
      
    };
    

    return (
      <RegisterPage>
        <Link to='/'><LoginButton>Login</LoginButton></Link>  
        <Tab>
            <ActiveTab >User</ActiveTab>
            <Link to='/Sign-up/Grid'><UnactiveTab>Grid-Company</UnactiveTab></Link>
        </Tab>
        <H1>User</H1>
            <Form onSubmit="return false;">
                <Label>Full Name: </Label>
                <Text type="Text" onChange={updateName} required/>
                <br/>

                <Label>Phone Number: </Label>
                <Text type="Text" onChange={updatePhone} required/>
                <br/>

                <Label>State: </Label>
                <Text type="Text" onChange={updateState} required/>
                <br/>

                <Label>Email-id: </Label>
                <Text type="Text" onChange={updateEmail} required/>
                <br/>

                <Label>New Password: </Label>
                <Text type="Password" onChange={updateNPasswd} required/>
                <br/>

                <Label>Confirm Password: </Label>
                <Text type="Password" onChange={updateCPasswd} required/>
                <br/>

                <Label>Document: </Label>
                <input type="file" onChange={captureFile}/>
                <br/>

                <Label>Current meter reading: </Label>
                <Text type="Number" onChange={updateRead} required/>
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