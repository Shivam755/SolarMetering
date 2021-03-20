import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import netMetering from './netMetering';

export default function Login() {
    //UserId
    const [userId, setUserId] = useState('');
    const updateUserId = (e) =>{
        setUserId(e.target.value);
    }

    //Password
    const [passwd, setPasswd] = useState('');
    const updatePassword = (e) =>{
        setPasswd(e.target.value);
    }

    //Login type
    const [type, setType] = useState('');
    const updateType = (e) =>{
        setType(e.target.value)
    }

    const LoadPage = async (e) =>{
        e.preventDefault();
        if (type === 'User')
        {
            const res = await netMetering.methods.verifyLogin(userId,passwd).call();
            if (res)
            {
                console.log("Login Successful!!!");
                alert("Login Successful!!");
                document.getElementById("ERROR").style = 'display: none';
            }
            else{
                document.getElementById("ERROR").style = 'display: block';
            }
        }
        else if(type === 'Company')
        {
            const res = await netMetering.methods.verifyCompLogin(userId, passwd).call();
            if (res)
            {
                console.log("Login Successful!!!");
                alert("Login Successful!!");
                document.getElementById("ERROR").style = 'display: none';
            }
            else{
                document.getElementById("ERROR").style = 'display: block';
            }
        }
        else{
            alert("Please select a login type.")
        }
        console.log(userId, passwd);
    }

    return (
        <LogPage>
            <Error id='ERROR'>WRONG USERID OR PASSWORD!!!!</Error>
            <Link to='/Sign-up'><SignUp>Sign-up</SignUp></Link>
            
            <H1>Login</H1>
            <Form>
            <Sec1>
                <Label>UserID: </Label>
                <Text type="Text" value={userId} onChange={updateUserId} placeholder="UserAddress"/>
                <br/>

                <Label>Password: </Label>
                <Text type='Password' value={passwd} onChange={updatePassword} placeholder="Password"/>
                <br/>
            </Sec1>

            <Label>Login Type:</Label>
            <Radiobutton type='radio' name='LoginType' onChange={updateType} value='User'/>
            <Label>User</Label>
            <Radiobutton type='radio' name='LoginType' onChange={updateType} value='Company'/>
            <Label>Company</Label>
            <br/>
            <Button onClick={LoadPage}>Login</Button>
            </Form>
        </LogPage>
    )
}
const Error = styled.h1`
    color: #ff0000;
    background: white;
    display: none;
`

const SignUp = styled.button`
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
`

const LogPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53));
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
`
const Form = styled.form`
    padding: 10px;
`
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
`
const H1 = styled.h1`
    font-size: 50px;
    font-weight: 700px;
`
const Label = styled.label`
    font-size: 26px;
    font-weight: 600px;
    padding:10px;
    padding-top: 10px;
    padding-bottom: 10px;
`
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
`
const Sec1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Radiobutton = styled.input`
    width: 20px;
    height: 20px;
    color: #ee8844;
    background-color: black;
`