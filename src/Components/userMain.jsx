import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './userSidebarData';
import netMetering from './netMetering';
import IncomingEtherCalc from './IncomingEtherCalc';
import OutGoingEtherCalc from './outGoingEtherCalc';
import RejectedUser from './RejectedUser';

const UserMain = () => {
    //Getting session storage data
    const cred=JSON.parse(sessionStorage.getItem("Credential"));
    let info = [], gridValue = [], grossValue = [];
    //getting data from contract
    const [temp, setTemp] = useState({});
    const proData = async() =>{
        try{
            sessionStorage.setItem('Data',JSON.stringify(await netMetering.methods.get_data(cred['id']).call()));
            setTemp(JSON.parse(sessionStorage.getItem('Data')));
        }
        catch(err){
            console.log(err);
        }   
    }
    useEffect(()=>{proData()},[]);
    info = JSON.parse(sessionStorage.getItem('Data'));
    console.log(info);
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    else if(temp[9]){
        return(
            <RejectedUser ewalletId={info[1]}/>
        )
    }
    if (info){
        gridValue = IncomingEtherCalc( info['3'], [info[10],info[11]]);
        grossValue = OutGoingEtherCalc(info['3'], [info[10],info[11]]);
        console.log(gridValue);
    }
    return (
        <div className='Site'>
            <div className='Menu'><Sidebar data={data} /></div>
            <div className='Page'>
                <Welcome style={{padding:'10px',margin:'10px'}}>
                    <Greet >Welcome {temp['0']}!!!</Greet>
                </Welcome>
                <Row>
                <Payment style={{padding:'20px', margin:'10px'}}>
                <label className="Checkpaymentlabel">Amount To be Recieved: </label>
                <label className="Checkpaymentlabel" style={{fontWeight: 700,fontSize: 60}}>&#8377;{grossValue[1]}/-</label>
                </Payment>
                </Row>
                <Row>
                <Payment style={{padding:'20px', margin:'10px'}}>
                <label className="Checkpaymentlabel">Amount To be Paid: </label>
                <label className="Checkpaymentlabel" style={{fontWeight: 700,fontSize: 60}}>&#8377;{gridValue[1]}/-</label>
                </Payment>
                </Row>
        
            </div>
        </div>
    )
}
export default UserMain;

const Greet = styled.h1`
    font-size:72px;
    font-weight:500;
`;

const Welcome = styled.div`
    padding:10px;
    height:200px;
    width: 1000px;
    display:flex;
    text-align: center;
    box-shadow:2px 0px 4px 4px #4b4b4b;
    border-radius:10px;
`;
const Payment = styled.div`
    padding:10px;
    height:200px;
    width: 450px;
    box-shadow:2px 0px 4px 4px #4b4b4b;
    border-radius:10px;
`;

const Row = styled.div`
    flex-direction:row;
    padding: 10px;
    display:inline-block;

`;