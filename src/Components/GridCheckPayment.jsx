import React from 'react';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './gridSidebarData';
import IncomingEtherCalc from './IncomingEtherCalc';
import '../App.css';


const GridCheckPayment = () => {
    let custom = [];
    //Getting sessionStorage data
    let temp = JSON.parse(sessionStorage.getItem('Data'));
    custom = JSON.parse(sessionStorage.getItem('CustomData'));
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }

    return (
        <div className="Site">
            <div className="Menu"><Sidebar data={data} /></div>
            <div className="Page">
                <h1 className="H1">Check payment Page</h1>
            <div style={{ height: 600, width: '100%' }}>
             <table className='Table'>
                 <tr className='Tr'>
                     <th className='Th'>Subscriber Id</th>
                     <th className='Th'>Name</th>
                     <th className='Th'>Units Consumed</th>
                     <th className='Th'>Amount to be Paid</th>
                 </tr>
             {custom.map((el)=>{
                 if (el[4]!==temp[0] || !el[10] || el[11]){
                     return;
                 }
                 return (
                     <tr className='Tr'>
                         <td className='Td'>{el[7]}</td>
                         <td className='Td'>{el[1]}</td>
                         <td className='Td'>{el[12]}</td>
                         <td className='Td'>&#8377;{IncomingEtherCalc(el[3],[el[12],el[13]])[1]}/-</td>
                     </tr>
                 )
             })}
             </table>
            </div>
            </div>
        </div>
    )
}

export default GridCheckPayment
