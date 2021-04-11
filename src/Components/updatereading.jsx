import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './userSidebarData';
import '../App.css';
import netMetering from './netMetering';
import NotVerified from './NotVerified';


const Updatereading = () => {
    //Readings
    const [read, setRead] = useState([]);
    let newIRead, newORead;
    //getting userdata
    const cred = JSON.parse(sessionStorage.getItem('Data'));
    try{
        var subID = JSON.parse(sessionStorage.getItem('Data'))['2'];
        var ewalletId = JSON.parse(sessionStorage.getItem('Data'))['1'];
    }catch(err){
        console.log(err);
    }
    //Getting userdata
    const getReading = async() =>{
        try{
            let temp = await netMetering.methods.viewReading(subID).call();
            console.log(temp);
            setRead(temp);
        }catch(err){
            console.log(err)
        }
        
    }
    
    //Running useEffect
    useEffect(()=>{getReading()},[])
    //Rendering page if accessed without login
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    //update reading
    const UpdateIRead = (e) =>{
        newIRead=e.target.value;
    }
    const UpdateORead = (e) =>{
        newORead=e.target.value;
    }
    // Submit function
    const Submit = async() => {
        if (newIRead < read['0'] || newORead < read['1'])
        {
            alert("Don't cheat!!!\nPlease enter correct readings");
            
            return ;
        }
        await netMetering.methods.updateReading(subID, newIRead, newORead).send({
            from: ewalletId,
            gas:6721975
        }).then((res)=>{
            console.log(res);
            alert('Readings updated successfully!!')
            window.location.pathname='/User';
        })
    }
    
    if (!cred[8]){
        return (
            <div className='Site'>
            <div className='Menu'><Sidebar data={data} /></div>
            <div className='Page'><NotVerified /></div>
            </div>
        )
    }
    return (
        <div className='Site'>
            <div className='Menu'><Sidebar data={data} /></div>
            <div className='Page'><h1 className='H1'>Update reading page</h1>
            <Row>
                <Payment>
                <Row>
                <label className='Incominglabel'><h4>Incoming Meter</h4></label>
                </Row>
                <Row>
                <label className='Label'>Current Meter Reading: </label>
                <label className='Label'>{read['0']}</label>
                </Row>
                <Row>
                <label className="Label">Update meter reading: </label>
                <input className='Text' type="Number" value={newIRead} onChange={UpdateIRead}/>
                </Row>
                </Payment>
            </Row>
            <Row>
                <Payment>
                <Row>
                <label className='Incominglabel'><h4>Outgoing Meter</h4></label>
                </Row>
                <Row>
                <label className='Label'>Current Meter Reading: </label>
                <label className='Label'>{read['1']}</label>
                </Row>
                <Row>
                <label className="Label">Update meter reading: </label>
                <input className='Text' type="Number" value={newORead} onChange={UpdateORead} />
                </Row>
                </Payment>
            </Row>
            <br/>
            <Row>
                <Button  align="center" onClick={Submit}>Update Reading</Button>            
            </Row>          
        </div>
        </div>
    )
    
}

export default Updatereading;


const Row = styled.div`
    flex-direction:row;
    padding: 10px;
    display:inline-block;

`;
const Payment = styled.div`
    padding:10px;
    height:300px;
    width: 450px;
    box-shadow:2px 0px 4px 4px #4b4b4b;
    border-radius:10px;
    
`;
const Button = styled.button`
    height: 48px;
  width: 128px;
  outline: none;
  border-radius: 5px;
  border: none;
  background-color: rgb(10, 130, 243);
  font-size: 20px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(14, 100, 156);
  transform: translate(0px, 2px);
}
`;