import React from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './userSidebarData';
import IncomingEtherCalc from './IncomingEtherCalc';
import NotVerified from './NotVerified';
import '../App.css';


const Paybill = () => {
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    const cred = JSON.parse(sessionStorage.getItem('Data'));
    let value = IncomingEtherCalc(cred['3'],[cred[10], cred[11]]);
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
            <div className='Page'>
                <h1 className='H1'>Pay bill page</h1>
            <Pay>
            <Row>
                        <label className='Label' style={{fontWeight: 700}}>Units Consumed: </label>
                        <label className='Label'>{value[0]}</label>

            </Row>
            <Row>
                        <label className='Label'style={{fontWeight: 700}}>Amount in Rupees: </label>
                        <label className='Label'>&#8377;{value[1]}/-</label>

            </Row>
            <Row>
                        <label className='Label'style={{fontWeight: 700}}>Amount in ether: </label>
                        <label className='Label'>{value[2]}</label>

            </Row>
            <Row>
                        <Button >Pay Bill</Button>            

            </Row>
            </Pay>
            </div>
        </div>
    )
    
}

export default Paybill;
const Row = styled.div`
    flex-direction:row;
    padding: 20px;

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
const Pay= styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
`;
