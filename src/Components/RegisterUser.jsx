import React, {useState, useEffect, useRef} from "react";
// import styled from "styled-components";
import {Link} from 'react-router-dom';
import netMetering from "./netMetering";


const RegisterUser = () => {
    
    //Variables for storing data
    let ewalletId, name, phone, state, nPasswd, cPasswd, passwd, email, subID, iread, oread, compID = useRef('');
    const [data, setData] = useState([]);
    //creating combobox for company names
    const compbox = async()=>{
      //fetching data from contract
      let temp = await netMetering.methods.companylist().call();
      //converting it into an array
      let comp = [];
      for (let i = 0; i<temp.length; i++)
      {
        comp.push([temp[i][0],temp[i][1]]);
      }
      localStorage.setItem('State', JSON.stringify(comp));
      //setting initial value
      if (comp[0] !== undefined) {
        compID.current = comp[0][0];
      }
      //changing state
      setData(comp);
    }
    //running the above declared function
    useEffect(()=>{compbox()},[]);

    //SetWalletId
    const updateWalletId = (e) =>{
      ewalletId = e.target.value;
    }

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

    //set companyID
    const updateCompId = (e) =>{
      compID.current = e.target.value;
    }

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

    //set SubID
    const updateSubId = (e) =>{
      subID = e.target.value;
    }

    //set Email
    const updateEmail = (e) =>{
      email = e.target.value;
    };

    // Current reading
    const updateGrossRead = (e) =>{
      oread = e.target.value;
    };

    const updateGridRead = (e) =>{
      iread = e.target.value;
    }

    const submit = async (e) =>{
      e.preventDefault()
      // Verify password matching
      if(! updatePasswd())
      {
        console.log("passwords dont match!!!");
        return ;
      }
      //Sending data to smart Contract
      console.log(ewalletId, name, phone, state, compID, passwd, email, subID, iread, oread);
      await netMetering.methods.addUser(subID,ewalletId, name, phone, state, compID.current, passwd, email, iread, oread).send({
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
      <div className='RegisterPage' onLoad={compbox}>
        <Link to='/'><button className='LoginButton'>Login</button></Link>  
        <div className='Tab'>
            <button className='ActiveTab' >User</button >
            <Link to='/Sign-up/Grid'><button className='UnactiveTab'>Grid-Company</button ></Link>
        </div>
        <h1>User</h1>
            <form className='Form' onSubmit="return false;">

                <label className="Label">Ethereum account address: </label>
                <input className='Text' type="Text" onChange={updateWalletId} required/>
                <br/>

                <label className="Label">Full Name: </label>
                <input className='Text' type="Text" onChange={updateName} required/>
                <br/>

                <label className="Label">Phone Number: </label>
                <input className='Text' type="Number" onChange={updatePhone} required/>
                <br/>

                <label className="Label">State: </label>
                <input className='Text' type="Text" onChange={updateState} required/>
                <br/>

                <label className='Label' htmlFor="company" >Grid Provider: </label>
                <select name="company" className='Select' onChange={updateCompId}>
                  {data.map((el)=>{
                    return <option value={el[0]}>{el[1]}</option>
                  })}
                </select>
                <br/>

                <label className="Label">Email-id(Used for login): </label>
                <input className='Text' type="Text" onChange={updateEmail} required/>
                <br/>

                <label className="Label">New Password: </label>
                <input className='Text' type="Password" onChange={updateNPasswd} required/>
                <br/>

                <label className="Label">Confirm Password: </label>
                <input className='Text' type="Password" onChange={updateCPasswd} required/>
                <br/>

                <label className="Label">Subscriber ID: </label>
                <input className='Text' type="Text" onChange={updateSubId} required/>
                <br/>
                
                <label className="Label">Current Grid-meter reading: </label>
                <input className='Text' type="Number" onChange={updateGridRead} required/>
                <br/>

                <label className="Label">Current Gross-meter reading: </label>
                <input className='Text' type="Number" onChange={updateGrossRead} required/>
                <br/>

                <button className='Button' onClick={submit}>Signup</button>
            </form>
      </div>
      </div>
    );
  }

  export default RegisterUser;