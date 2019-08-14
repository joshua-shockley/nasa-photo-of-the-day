import React, { useState, useEffect } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard.js";

export default function Nasa() {
const[pics, setPics] = useState("");

useEffect(()=> {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=MFLCF9PdTielYpq01JazxgVJSPt4wp2zFHV9tdeV`)
    .then(response => {
        console.log(response);
        const theDailyImage = response.data;
        console.log(theDailyImage);
        setPics(theDailyImage);
        console.log("can you see this from inside the axios")
    })
    .catch(err => {
        console.log(err.message);
    })
},[]);

if (!pics.url) return <h1 className="loading-comment">Loading...<span role="img" aria-label="alien">👽</span></h1>;


return(
<div className="thepic-container">
    <div className="thePicItself">
            <NasaCard key={pics.url} title={pics.title} date={pics.date} imgUrl={pics.url} explanation={pics.explanation}/>
    </div>
    <p>this is working from the nasa.js return</p>
</div>
);
}
// export is at top on the function