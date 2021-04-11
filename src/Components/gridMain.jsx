import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Nologinpage from './Nologinpage';
import data from './gridSidebarData';
import netMetering from './netMetering';


const GridMain = () => {
    const cred=JSON.parse(sessionStorage.getItem("Credential"));
    const [temp, setTemp] = useState({});
    const custData = async() =>{
        try{
            sessionStorage.setItem('Data',JSON.stringify(await netMetering.methods.getCompdata(cred['id']).call()));
            console.log(temp);
            let temp2 = await netMetering.methods.userlist().call();
            setTemp(JSON.parse(sessionStorage.getItem('Data')));
            sessionStorage.setItem('CustomData', JSON.stringify(temp2));
            console.log(temp2);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{custData()},[]);
    if (!JSON.parse(sessionStorage.getItem("Credential"))){
        return (
            <Nologinpage></Nologinpage>
        )
    }
    return (
        <div className="Site">
            <div className="Menu"><Sidebar data={data} /></div>
            <div className="Page">
                <Welcome style={{padding:'10px',margin:'10px'}}>
                    <Greet>Welcome {temp['1']}!!</Greet>
                </Welcome>
                <div className="Boxed">
                <p align='center'><b>Our company provides the clients with electricity and 
                    We also buy the electricity from the clients

                    <i>We hope you become a member in our company..</i>
                </b></p>
                </div>
                <div className='Boxed'>
                    <p>
                    <ol>
                        <li> We buy electricity according to prices in their respective clients state.</li>
                        <li> We supply electricity and price, according to their respective clients state.</li>
                        <li> All transactions will be done on ethereum.</li>
                        
                    </ol>
                    </p>
                </div>
            </div>
            </div>
        
    )
}

export default GridMain

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