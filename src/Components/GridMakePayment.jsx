import React from 'react';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './gridSidebarData';
import OutGoingEtherCalc from './outGoingEtherCalc';
import styled from 'styled-components';
import PaymentIcon from '@material-ui/icons/Payment';
import '../App.css';

const GridMakePayment = () => {
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    let custom = [];
    //Getting sessionStorage data
    let temp = JSON.parse(sessionStorage.getItem('Data'));
    custom = JSON.parse(sessionStorage.getItem('CustomData'));
    return (
        <div className="Site">
            <div className="Menu"><Sidebar data={data} /></div>
            <div className="Page">
            <h1 className="H1">Make payment Page</h1>
            <div style={{ height: 600, width: '100%' }}>
             <table className='Table'>
                 <tr className='Tr'>
                     <th className='Th'>Subscriber Id</th>
                     <th className='Th'>Name</th>
                     <th className='Th'>Volts sold</th>
                     <th className='Th'>Amount in rupees</th>
                     <th className='Th'>Amount in ethers</th>
                     <th className='Th'>Pay</th>
                 </tr>
                 {custom.map((el)=>{
                     if (el[4]!==temp[0] || !el[10] || el[11]){
                         return;
                     }
                     return (<tr className='Tr'>
                        <td className='Td'>{el[7]}</td>
                        <td className='Td'>{el[1]}</td>
                        <td className='Td'>{el[13]}</td>
                        <td className='Td'>&#8377;{OutGoingEtherCalc(el[3],[el[12],el[13]])[1]}/-</td>
                        <td className='Td'>{OutGoingEtherCalc(el[3],[el[12],el[13]])[2]}</td>
                        <td className='Td'><Pay><PaymentIcon /></Pay></td>
                    </tr>);
                 })}
             </table>
            </div>
        </div>
        </div>
    )
}

export default GridMakePayment;

const Pay = styled.button`
    height: 35px;
  width: 35px;
  outline: none;
  border-radius: 8px;
  border: none;
  background-color: rgb(34, 241, 231);
  font-size: 20px;
  margin: 5px;
  &:hover {
  cursor: pointer;
  transform: translate(0px, -2px);
}
  &:active {
  background: rgb(0, 199, 189);
  transform: translate(0px, 2px);
}
`;
