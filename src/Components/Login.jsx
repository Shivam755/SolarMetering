import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import netMetering from './netMetering';
import '../App.css';

export default function Login() {
    sessionStorage.clear()
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
                sessionStorage.setItem('Credential',JSON.stringify({'id': userId, 'passwd':passwd}))
                window.location.pathname = './User'
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
                sessionStorage.setItem('Credential',JSON.stringify({'id': userId, 'passwd':passwd}))
                window.location.pathname='/Grid';
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
        <div className='Container'>
        <LogPage>
            <Error id='ERROR'>WRONG USERID OR PASSWORD!!!!</Error>
            <Link to='/Sign-up'><SignUp>Sign-up</SignUp></Link>
            
            <h1 className='H1'>Login</h1>
            <form className='Form'>
            <Sec1>
                <label className='Label'>UserID: </label>
                <input className='Text' type="Text" value={userId} onChange={updateUserId} placeholder="UserAddress"/>
                <br/>

                <label className='Label'>Password: </label>
                <input className='Text' type='Password' value={passwd} onChange={updatePassword} placeholder="Password"/>
                <br/>
            </Sec1>

            <label className='Label'>Login Type:</label>
            <Radiobutton type='radio' name='LoginType' onChange={updateType} value='User'/>
            <label className='Label'>User</label>
            <Radiobutton type='radio' name='LoginType' onChange={updateType} value='Company'/>
            <label className='Label'>Company</label>
            <br/>
            <button className='Button' onClick={LoadPage}>Login</button>
            </form>
        </LogPage>
        </div>
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