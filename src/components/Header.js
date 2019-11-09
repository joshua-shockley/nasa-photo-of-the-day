import React, {useState, useEffect} from 'react';
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
    align-items: center;
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

    const Button = styled.button`
    color: #61dafb;
    background: rgb(44, 2, 2);
    margin: 0px 10px 0px 10px;
    font-size: 1.2rem;
    border-radius: 15%;

    `;


    return(
    <Headerdiv>
        <Image className="rotate" src={logo} alt="spinning globe logo dealy....lol"/>
        <HeaderMenu>
            <Button className="App-link" onClick="home()">HOME</Button>
            <Button className="App-link" onClick="home()">ABOUT</Button>
            <Button className="App-link" onClick="home()">BECOME A MEMBER</Button>
            {/* <h2><button className="App-link">LOOK AT SOME ASTROIDS!</button></h2> */}
        </HeaderMenu>
    </Headerdiv>
    );
}
