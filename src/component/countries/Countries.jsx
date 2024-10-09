import { useEffect, useState } from "react";
import Country from "./Country";
import './country.css'

const Countries = () => {
    const [contries,setContries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setContries(data))
        // .then (data=>console.log(data[0]))
    },[])
    return (
        <div className="outerBox">
            <h2>Total Contries : {contries.length}</h2>
            {
                contries.map(country=><Country key={country.car.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;