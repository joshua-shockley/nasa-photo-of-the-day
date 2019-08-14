import React, { useState, useEffect } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard.js";

export default function Nasa() {
const[pics, setPics] = useState([]);

useEffect(()=> {
    axios.get(`the url for nasa api  ${date}`)
    .then(response => {
        const theDailyImage = response.?;
        console.log(theDailyImage);
        setPics(theDailyImage);
    });
},[date]);

return(
<div className="thepic-container">
    <NasaCard key={imgUrl} date={date} imgUrl={imgUrl}/>
</div>
);
}
// export is at top on the function