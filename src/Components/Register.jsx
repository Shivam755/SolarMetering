import React, {useState} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'react-tabs';
import RegisterGrid from './RegisterGrid';
import RegisterUser from './RegisterUser'

export default function Register() {
  const [key, setKey] = useState('user');
    return (
      <RegisterPage>
        <Link to='/'><LoginButton>Login</LoginButton></Link>  
        <Tab>
            <ActiveTab >User</ActiveTab>
            <Link to='/Sign-up/Grid'><UnactiveTab>Grid-Company</UnactiveTab></Link>
        </Tab>
        {/* <nav>
          <li>User</li>
          <li>Grid-Provider</li>
        </nav> */}
        {/* <Tabs activeKey={key} onSelect={(k)=>{setKey(k)}} className='nav nav-tabs'>
          <Tab eventKey='user' title='User'>
            <RegisterUser/>
          </Tab>
          <Tab eventKey='grid' title='Grid-Provider'>
            <RegisterGrid/>
          </Tab>
        </Tabs> */}
            
            
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
//   const Tab = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;

  const ActiveTab = styled.div`
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
  /* align-content: space-around; */
  background:linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53)); 
  width: 100%; 
  height: 100%; 
  background-size : cover;
  padding:10px; 
   `;
 