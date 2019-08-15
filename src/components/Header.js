import React from 'react';
import styled from 'styled-components';
import {Image} from 'semantic-ui-react';
import logo from '../images/earth.jpg';


export default function Header(){

    const Headerdiv = styled.div` 
    background-color: #282c34;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    border-radius: 3%;
    `;

    const HeaderMenu = styled.div` 
    background:silver;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    height: 100px;
    margin-top: 20px;
    border-radius:5%;

    `;


    const Image = styled.img` 
    width: 20%;
    height: 20%;
    border-radius: 50%;
    align-self: center;
    margin:10px auto;

    `;

    return(
    <Headerdiv>
        <Image className="rotate" src={logo} alt="spinning globe logo dealy....lol"/>
        <HeaderMenu>
            <h2><button className="App-link">HOME</button></h2>
            <h2><button className="App-link">ABOUT</button></h2>
            <h2><button className="App-link">BECOME A MEMBER</button></h2>
            <h2><button className="App-link">LOOK AT SOME ASTROIDS!</button></h2>
        </HeaderMenu>
    </Headerdiv>
    );
}
