import React from 'react';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './gridSidebarData';
import netMetering from './netMetering';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import '../App.css';

const VerifyCustomers = () => {
    //Getting sessionStorage data
    let temp = JSON.parse(sessionStorage.getItem('Data'));
    let custom = JSON.parse(sessionStorage.getItem('CustomData'));
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    //A function to verify user
    const verify = async(subId) =>{
        await netMetering.methods.verifyCustomer(subId).send({
            from: temp[0],
            gas: 6721975
        }).then(async(res) =>{
            console.log(res);
            let temp2 = await netMetering.methods.userlist().call()
            sessionStorage.setItem('CustomData', JSON.stringify(temp2));
            window.location.pathname = '/GridVerifyCustomer'
        })
    }
    //A function for reject
    const reject = async(subId) =>{
        await netMetering.methods.rejectCustomer(subId).send({
            from: temp[0],
            gas: 6721975
        }).then(async(res) =>{
            console.log(res);
            let temp2 = await netMetering.methods.userlist().call()
            sessionStorage.setItem('CustomData', JSON.stringify(temp2));
            window.location.pathname = '/GridVerifyCustomer'
        })
    }
   
    return (
        <div className='Site'>
            <div className='Menu'><Sidebar data={data} /></div>
            <div className='Page'><h1>Verify Customers </h1>
             <div style={{ height: 600, width: '100%' }}>
             <table className='Table'>
                 <tr className='Tr'>
                     <th className='Th'>Subscriber ID</th>
                     <th className='Th'>Full Name</th>
                     <th className='Th'>State</th>
                     <th className='Th'>Verify</th>
                     <th className='Th'>Reject</th>
                 </tr>
                 { custom.map((el)=>{
                     if (el[10] || el[11] || el[1] === ''){
                         return;
                     }
                     return (<tr className='Tr'>
                         <td className='Td'>{el['7']}</td>
                         <td className='Td'>{el['1']}</td>
                         <td className='Td'>{el['3']}</td>
                         <td className='Td'><Verify onClick={()=>{
                             verify(el['7'])
                         }}><CheckIcon /></Verify></td>
                         <td className='Td'><Reject onClick={()=>{
                             reject(el['7'])
                         }}><CloseIcon /></Reject></td>
                     </tr>)
                 })}
             </table>
             </div>
            </div>
            
        </div>
    )
}
export default VerifyCustomers;
const Reject = styled.button`
    height: 35px;
  width: 35px;
  outline: none;
  border-radius: 8px;
  border: none;
  background-color: rgb(185, 19, 19);
  color:#fff;
  font-size: 20px;
  margin: 5px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(255, 36, 36);
  transform: translate(0px, 2px);
}
`;

const Verify = styled.button`
    height: 35px;
  width: 35px;
  outline: none;
  border-radius: 8px;
  border: none;
  background-color: rgb(23, 122, 39);
  color:#fff;
  font-size: 20px;
  margin: 5px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(3, 128, 51);
  transform: translate(0px, 2px);
}
`;