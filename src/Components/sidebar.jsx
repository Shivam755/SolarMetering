import React from 'react';
import '../App.css';
import styled from 'styled-components';

const sidebar = ({data}) => {
    return (
        <Sidebar>
            <List>
                {data.map((val,key)=>{
                    return <Element className={window.location.pathname === val.link?'active':''} key={key} onClick={()=>{window.location.pathname=val.link}}>
                        <Icon>{val.icon}
                        </Icon>
                        <Title>
                            {val.title}
                        </Title>
                        </Element>
                })}
            </List>
        </Sidebar>
    )
}

export default sidebar
const Sidebar = styled.div`
    height: 100vh;
    width: 250px;
    background-color: #2f4050;
    padding:0;
    align-items: left;
    position:fixed;
`;

const List = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;

`;

const Element = styled.li`
    width: 100%;
    height: 50px;
    list-style-type: none;
    margin: 0%;
    display: flex;
    flex-direction: row;
    color: white;
    /* justify-content: center; */
    align-items: center;
    :hover{
        cursor: pointer;
        background-color: #293846;
    }
`;

const Icon = styled.div`
    flex: 30%;
    display:grid;
    place-items:center;
`;

const Title = styled.div`
    flex: 70%;
`;