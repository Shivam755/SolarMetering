import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Sidebar from './sidebar';
import userdata from './userSidebarData';
import Nologinpage from './Nologinpage';
import '../App.css';
import netMetering from './netMetering';

const UserProfile = () => {
    //Setting a state for recieved data
    const [prof, setProf] = useState({});
    //declaring necessary variables
    let name, phone, state, email, ewalletId, company={}, password, subID, confPasswd, nPasswd, cPasswd, load=false;
    //Getting session storage data
    const data=JSON.parse(sessionStorage.getItem("Credential"));
    // Getting local storage data
    const states = JSON.parse(localStorage.getItem('State'));

    //getting data from contract
    const proData = async() =>{
        try{
            let temp2 = await netMetering.methods.get_data(data['id']).call()
            setProf(temp2);
        }
        catch(err){
            console.log(err);
            load=true;
        }
        
    }
    useEffect(()=>{proData()},[]);
    //updating data
    name=prof['0']; ewalletId=prof["1"]; subID=prof['2']; state=prof['3']; password=prof['4']; phone=prof['6']; email=prof['7'];
    for (let i = 0; i < states.length; i++){
        if(states[i][0] === prof['5']){
            company=states[i];
            break;
        }
    }
    if (!data||load){
        return (
            <Nologinpage></Nologinpage>
        )
    }

    //Switching to edit profile page
    const editProfile = () => {
        document.getElementById('main').style = 'display: none;';
        document.getElementById('edit').style = 'display: flex;';
        document.getElementById('password').style = 'display: none;';
    }
    //Switching to view profile page
    const viewProfile = () => {
        document.getElementById('main').style = 'display: flex;';
        document.getElementById('edit').style = 'display: none;';
        document.getElementById('password').style = 'display: none;';
    }
    //Switching to change password page
    const changePasswd = () => {
        document.getElementById('main').style = 'display: none;';
        document.getElementById('edit').style = 'display: none;';
        document.getElementById('password').style = 'display: flex;';
    }
    //update variables
    const updateName = (e) =>{
        name = e.target.value
    }
    const updateWalletId = (e) =>{
        ewalletId = e.target.value
    }
    const updateState = (e) =>{
        state = e.target.value
    }
    const udpatePhone = (e) =>{
        phone = e.target.value
    }
    const updateEmail = (e) =>{
        email = e.target.value
    }
    const updateConfPasswd = (e) =>{
        confPasswd = e.target.value
    } 
    const updateCPasswd = (e) =>{
        cPasswd = e.target.value
    } 
    const updateNPasswd = (e) =>{
        nPasswd = e.target.value
    } 
    const updateCompId = (e) =>{
        for (let i = 0; i < states.length; i++ ){
            if (states[i]['0'] === e.target.value){
                company = states[i];
                console.log(company['1'])
                break;
            }
        }
        
    }
    // Saving Password
    const savePasswd = async()=>{
        if (confPasswd !== password){
            alert("Wrong Existing Password!!\nPlease Try Again");
            return;
        }
        if (cPasswd !== nPasswd)
        {
            alert("The new and confirm passwords don't match!!!\nPlease Try Again");
            return;
        }
        await netMetering.methods.updatePasswd(subID, nPasswd).send({
            from: ewalletId,
            gas:6721975
        }).then((res)=>{
            console.log(res);
            alert('Password updated successfully!!');
            window.location.pathname='/User';
        });
    }
    //Saving Changes
    const saveChanges = async()=>{
        await netMetering.methods.updateDetails(subID, ewalletId, name,phone,email,state,company['0']).send({
            from:ewalletId,
            gas:6721975
        }).then((res)=>{
            console.log(res)
            alert('Changes updated successfully!!!')
            window.location.pathname = '/User';
        })
    }
    return (
        <div className='Site'>
            <div className='Menu'><Sidebar data={userdata} /></div>
            <div className='Page'>
                <Profile id='main'>
                    <h1 className='H1'>Profile Page</h1>
                    <hr style={{
                        color: "#3a3a3a",
                        backgroundColor: '#3a3a3a',
                        height: 5
                    }}/>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Subscription ID: </label>
                        <label className='Label'>{subID}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Name: </label>
                        <label className='Label'>{name}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Ethereum Address: </label>
                        <label className='Label'>{ewalletId}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Contact Number: </label>
                        <label className='Label'>{phone}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Email: </label>
                        <label className='Label'>{email}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>State: </label>
                        <label className='Label'>{state}</label>
                    </Row>
                    <Row>
                        <label className='Label'style={{fontWeight: 700}}>Grid Provider: </label>
                        <label className='Label'>{company[1]}</label>
                    </Row>
                    <Row>
                        <Button onClick={editProfile}>Edit Profile</Button>
                        <Left>
                        <Button onClick={changePasswd}>Change Password</Button>
                        </Left>
                    </Row>
                </Profile>
                <EditPersonalInfo id='edit'>
                    <Left>
                        <BackButton onClick={viewProfile}>
                            <ArrowBackIcon/>
                        </BackButton>
                    </Left>
                    <h1 className='H1'>Edit Profile</h1>
                    <Row>
                        <label className='Label'>Ethereum address: </label>
                        <input className='Text' placeholder={ewalletId} onChange={updateWalletId} />
                    </Row>
                    <Row>
                        <label className='Label'>Name: </label>
                        <input className='Text' placeholder={name} onChange={updateName} />
                    </Row>
                    <Row>
                        <label className='Label'>Contact Number: </label>
                        <input className='Text' placeholder={phone} onChange={udpatePhone} />
                    </Row>
                    <Row>
                        <label className='Label'>Email: </label>
                        <input className='Text' placeholder={email} onChange={updateEmail} />
                    </Row>
                    <Row>
                        <label className='Label'>State: </label>
                        <input className='Text' placeholder={state} onChange={updateState} />
                    </Row>
                    <Row>
                        <label className='Label'>Grid Provider: </label>
                        <select className='Select' onChange={updateCompId}>
                            {states.map((el)=>{
                                return <option value={el[0]}>{el[1]}</option>
                            })}
                        </select>
                        <label className="Label">{company['1']}</label>
                    </Row>
                    <Row>
                        <Button onClick={saveChanges}>Save Changes</Button>
                    </Row>
                </EditPersonalInfo>
                <ChangePassword id='password'>
                    <h1 className="H1">Change Password Page</h1>
                    <Left>
                        <BackButton onClick={viewProfile}>
                            <ArrowBackIcon/>
                        </BackButton>
                    </Left>
                    <Row>
                        <label className='Label'>Current Password: </label>
                        <input className='Text' type='Password' value={confPasswd} onChange={updateConfPasswd} />
                    </Row>
                    <Row>
                        <label className='Label'>New Password: </label>
                        <input className='Text' type='Password' value={nPasswd} onChange={updateNPasswd} />
                    </Row>
                    <Row>
                        <label className='Label'>Confirm Password: </label>
                        <input className='Text' type='Password' value={cPasswd} onChange={updateCPasswd} />
                    </Row>
                    <Row>
                        <Button onClick={savePasswd}>Save Password</Button>
                    </Row>
                </ChangePassword>
            </div>
        </div>
    )
    
}

export default UserProfile;

const Profile = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
`;

const EditPersonalInfo = styled.div`
    display:none;
    flex-direction: column;
    text-align: center;
`;

const ChangePassword = styled.div`
    display:none;
    flex-direction: column;
    text-align: center;
`;

const Row = styled.div`
    flex-direction:row;
    padding: 10px;
`;

const Left = styled.div`
    position:absolute;
    align-items:left;
`;


const BackButton = styled.button`
    height: 48px;
  width: 48px;
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow:2px;
  background-color: rgb(241, 68, 68);
  font-size: 20px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(172, 43, 43);
  transform: translate(0px, 2px);
}
`;
const Button = styled.button`
    height: 48px;
  width: 128px;
  outline: none;
  border-radius: 5px;
  border: none;
  background-color: rgb(10, 130, 243);
  font-size: 20px;
  margin: 5px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(14, 100, 156);
  transform: translate(0px, 2px);
}
`;