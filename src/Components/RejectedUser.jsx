import React from 'react';
import netMetering from './netMetering';

const RejectedUser = ({ewalletId}) => {

    const deleteAccount = async() =>{
        await netMetering.methods.removeUser(ewalletId).send({
            from: ewalletId,
            gas:6721975 
        }).then((res)=>{
            console.log(res);
            alert("Your account has been deleted successfully!!!!");
            window.location.pathname='/';
        })
    }

    return (
        <div>
            <h1 className="H1" style={{color:'#ff0000'}}>Account Rejected!!!</h1>
            <label  className="Label">Your account has been rejected by your Grid provider. </label><br/>
            <button className='Button' onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}

export default RejectedUser
