import React from "react";
import {Link} from 'react-router-dom';
import netMetering from "./netMetering";
import '../App.css'

export default function RegisterGrid() {
  //Name
  let name, state, nPasswd, cPasswd, passwd, ewalletId;

  //SetWalletId
  const updateWalletId = (e) =>{
    ewalletId = e.target.value;
  }
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
    
      await netMetering.methods.addCompany(ewalletId, name, state, passwd).send({
        from: ewalletId,
        gas:6721975
      }).then((res) =>{
        if (res){
          alert("Successfull!!!");
          window.location.pathname='/'
        }
      });
  };

    return (
      <div className='Container'>
      <div className='RegisterPage'>
        <Link to='/'><button className='LoginButton'>Login</button></Link>
            <div className='Tab'>
            <Link to='/Sign-up'><button className='UnactiveTab'>User</button></Link>
            <button className='ActiveTab'>Grid-Company</button>
            </div>
            
            <h1>Company</h1>
            <form className='Form'>
                <label className="Label">Ethereum account address: </label>
                <input className='Text' type="Text" onChange={updateWalletId} required/>
                <br/>
                <label className='Label'>Company Name(Used for login): </label>
                <input className='Text' type="Text" onChange={updateName} required/>
                <br/>

                <label className='Label'>State: </label>
                <input className='Text' type="Text" onChange={updateState} required/>
                <br/>

                <label className='Label'>New Password: </label>
                <input className='Text' type="Password" onChange={updateNPasswd} required/>
                <br/>

                <label className='Label'>Confirm Password: </label>
                <input className='Text' type="Password" onChange={updateCPasswd} required/>
                <br/>

                <button className='Button' onClick={submit}>Signup</button>
            </form>
      </div>
      </div>
    );
  }

