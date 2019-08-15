import React from 'react';
import {Card, Icon, Image, CardContent} from 'semantic-ui-react';
import styled from 'styled-components';


const NasaCard = (props) => {
    const CardDiv = styled.div`
    width:80%;
    margin: 2% auto;
    display:flex; 
    justify-content: center;
    background: silver;
    border-radius: 5%;
    
    `;

    const Image = styled.img` 
    width:98%;
    border-radius: 2%;
    `;

    const Header = styled.header`
    background: silver;
    font-size: 2rem;
    width: 50%;
    margin: 1% auto;
    `;

    const CardP = styled.div` 
    font-size: 1.3rem;
    color: white;
    `;

    return (
        // <div className="nasa-cardInfo" key={props.title}>
        //     <h2 className="nasa_title">Nasa's Photo Of The Day: <strong>{props.title}</strong></h2>
        //     <p>Date: {props.date}</p>
        //     <img className="imgTheDaily" alt="daily space pic!" src={props.imgUrl}/>
        //     <p className="the-description">{props.explanation}</p>
        // </div>
        <CardDiv>
            <CardContent>
                <Header>Nasa's Photo Of The Day: <strong>{props.title}</strong></Header>
                <CardP>Date: <strong>{props.date}</strong></CardP>
                <Image src={props.imgUrl} alt={props.title}/>
                <CardP><strong>What's This: </strong>{props.explanation}</CardP>

            </CardContent>
        </CardDiv>
    )
    
}
export default NasaCard;