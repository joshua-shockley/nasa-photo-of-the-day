import React from 'react';

const NasaCard = props => {
    return (
        <div className="nasa-cardInfo" key={props.title}>
            <h2 className="nasa_title">Nasa's Photo Of The Day: <strong>{props.title}</strong></h2>
            <p>Date: {props.date}</p>
            <img className="imgTheDaily" alt="daily space pic!" src={props.imgUrl}/>
            <p>{props.explanation}</p>
            
        </div>
    )
}
export default NasaCard;